import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMatchesAction } from '../../state/matches/matches.reducer';
import { loadLeaguesAction } from '../../state/leagues/leagues.reducer';
import Loader from 'react-loader-spinner';

import './home.css';
import Flag from 'react-world-flags';

import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.matchesReducer.loading);
    const matches = useSelector((state) => state.matchesReducer.data.matches);

    const competitions = useSelector((state) => state.leaguesReducer.data.competitions);

    useEffect(
        () => {
            if (!matches) {
                dispatch(loadMatchesAction());
            }
        },
        [ dispatch ]
    );

    useEffect(
        () => {
            dispatch(loadLeaguesAction());
        },
        [ dispatch ]
    );

    if (isLoading) {
        return <Loader className="loader" type="ThreeDots" />;
    }

    return (
        <div className="back">
            <div className="table-container ui container segment">
                <div className="segments-container ui segment">
                    {competitions &&
                        competitions.map((competition) => (
                            <Link to={`/leagues/${competition.id}`} key={competition.id}>
                                <button>
                                    <Flag
                                        code={
                                            competition.area.countryCode === 'ENG' ? (
                                                'GB-ENG'
                                            ) : (
                                                competition.area.countryCode
                                            )
                                        }
                                        height="11"
                                    />
                                    {competition.name}
                                </button>
                            </Link>
                        ))}
                </div>
                <div className="matches-container ui segment">
                    <h2>Today's matches: </h2>
                    <div className="matches">
                        {`${matches && Object.keys(matches).length === 0 ? 'no matches available' : ''}`}
                    </div>
                    {matches &&
                        matches.map((match) => {
                            const today = new Date(`${match.utcDate}`);
                            let hours = today.toLocaleTimeString();
                            return (
                                <div key={match.id}>
                                    <br />
                                    <Flag
                                        code={
                                            match.competition.area.code === 'ENG' ? (
                                                'GB-ENG'
                                            ) : (
                                                match.competition.area.code
                                            )
                                        }
                                        height="11"
                                    />{' '}
                                    <strong>{match.competition.area.name}:</strong> {match.competition.name} - {' '}
                                    {`matchday: ${match.matchday}`}
                                    <div className="matches">
                                        <br />
                                        {`${hours}`} {' '}
                                        <Link style={{ color: 'black' }} to={`/details/${match.id}`} key={match.id}>
                                            {match.homeTeam.name} - {match.awayTeam.name}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Home;

// /v2/competitions/{id}/standings
// footballInfoScore
