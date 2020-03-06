import React from 'react';

import Flag from 'react-world-flags';
import { Link } from 'react-router-dom';

const HomeView = ({ competitions, matches }) => (
    <div className="back">
        <div className="table-container ui container segment">
            <div className="segments-container ui segment">
                {competitions &&
                    competitions.map((competition) => (
                        <Link to={`/leagues/${competition.id}`} key={competition.id}>
                            <button>
                                <Flag
                                    code={
                                        competition.area.countryCode === 'ENG' ? 'GB-ENG' : competition.area.countryCode
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
                                        match.competition.area.code === 'ENG' ? 'GB-ENG' : match.competition.area.code
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

export default HomeView;
