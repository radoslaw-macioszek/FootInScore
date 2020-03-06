import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './league-details.css';
import { IoMdFootball } from 'react-icons/io';
import { FaTable } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import Loader from 'react-loader-spinner';

import { loadStandingsAction } from '../../state/standings/standings.reducer';
import { Link, useParams } from 'react-router-dom';
import { loadLeague, currentSchedule } from '../../state/schedules/schedules.reducer';
import Table from '../../components/Table';

const LeagueDetails = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.standingsReducer.loading);
    const myStandings = useSelector((state) => state.standingsReducer.data.data);
    const { leagueId } = useParams();
    const parsedLeagueId = parseInt(leagueId);
    const competitions = useSelector((state) => state.standingsReducer.data.data);
    const next = useSelector((state) => state.schedulesReducer.nextMatchday);
    const next2 = parseInt(next);

    const [ value, setValue ] = useState(0);

    useEffect(
        () => {
            dispatch(loadStandingsAction(parsedLeagueId));
        },
        [ dispatch ]
    );

    useEffect(
        () => {
            if (myStandings) {
                dispatch(loadLeague(myStandings.competition.code));
                dispatch(currentSchedule(myStandings.season.currentMatchday));
            }
        },
        [ dispatch, myStandings ]
    );

    return isLoading ? (
        <Loader className="loader" type="ThreeDots" />
    ) : (
        <div className="back">
            <div className="table-container ui container segment">
                <div className="segment-container ui segment">
                    {competitions && (
                        <Link to={`/leagues/${competitions.competition.id}`}>
                            <button>
                                <FaTable className="icon" /> Standings / Tabela
                            </button>
                        </Link>
                    )}
                    <Link to={`/schedule/`}>
                        <button>
                            <IoMdFootball className="icon" /> Results / Wyniki
                        </button>
                    </Link>
                    <Link to={`/timetable/`} onClick={() => dispatch(currentSchedule(next2))}>
                        <button>
                            <AiOutlineSchedule className="icon" /> Timetable / Terminarz
                        </button>
                    </Link>
                </div>
                <div className="buttons">
                    <button onClick={() => setValue(0)}>All</button>
                    <button onClick={() => setValue(1)}>Home</button>
                    <button onClick={() => setValue(2)}>Away</button>
                </div>
                <Table value={value} />
            </div>
        </div>
    );
};

export default LeagueDetails;
