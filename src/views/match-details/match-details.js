import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadTeamsAction } from '../../state/teams/teams.reducer';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './match-details.css';
import Flag from 'react-world-flags';

const MatchDetails = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.teamsReducer.loading);
    const team1 = useSelector((state) => state.teamsReducer.team1);
    const team2 = useSelector((state) => state.teamsReducer.team2);
    const { matchId } = useParams();
    const parsedMatchId = parseInt(matchId);
    const match = useSelector((state) =>
        state.matchesReducer.data.matches.filter((match) => {
            return match.id === parsedMatchId;
        })
    )[0];

    useEffect(
        () => {
            dispatch(loadTeamsAction(parsedMatchId));
        },
        [ dispatch ]
    );

    return isLoading ? (
        <Loader className="loader" type="ThreeDots" />
    ) : (
        <div>
            <div className="table-container ui container segment">
                <div className="match-container ui clearing segment">
                    <div className="details">
                        <div className="team-names">
                            <h2 className="team-left">{team1.name}</h2>
                            <h5>
                                <Flag
                                    code={
                                        match.competition.area.code === 'ENG' ? 'GB-ENG' : match.competition.area.code
                                    }
                                    height="50"
                                    marginBottom="20"
                                />
                                <br />
                                <br />
                                Stadium: {team1.venue ? team1.venue : ''} <br />
                                Referee: {match.referees.length ? match.referees[0].name : 'no signed referee'}
                                <br />
                                <br />
                                <span style={{ fontSize: '22px' }}> Lineups: </span>
                            </h5>
                            <h2 className="team-right">{team2.name}</h2>
                        </div>
                    </div>
                </div>
                <div className="match-container ui horizontal segments">
                    <div className="team ui aligned segment">
                        <div className="team">
                            {Object.keys(team1).length &&
                                team1.squad.map((homePlayer, index) => {
                                    return (
                                        <div key={homePlayer.id}>
                                            <strong>{team1.squad.length - 1 === index ? 'Trener: ' : ''}</strong>
                                            {homePlayer.shirtNumber}. {homePlayer.name}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="team ui right aligned segment">
                        <div className="team">
                            {Object.keys(team2).length &&
                                team2.squad.map((homePlayer, index) => {
                                    return (
                                        <div
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            key={homePlayer.id}
                                        >
                                            <strong>{team2.squad.length - 1 === index ? 'Trener: ' : ''}</strong>
                                            {homePlayer.shirtNumber}. {homePlayer.name}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
