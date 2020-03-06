import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadSchedulesAction,
    nextSchedule,
    previousSchedule,
    currentSchedule
} from '../../state/schedules/schedules.reducer';
import { Link } from 'react-router-dom';

import { IoMdFootball, IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { FaTable } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';
import Loader from 'react-loader-spinner';

const Timetable = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.schedulesReducer.loading);
    const schedules = useSelector((state) => state.schedulesReducer.data.matches);
    const schedulesInfo = useSelector((state) => state.schedulesReducer.data);
    const competitions = useSelector((state) => state.standingsReducer.data.data);

    useEffect(
        () => {
            dispatch(loadSchedulesAction());
        },
        [ dispatch ]
    );

    return isLoading ? (
        <Loader className="loader" type="ThreeDots" />
    ) : (
        <div>
            <div className="back">
                <div className="table-container ui container segment">
                    <div className="segments-container ui container segment">
                        {competitions && (
                            <Link to={`/leagues/${competitions.competition.id}`}>
                                <button>
                                    <FaTable className="icon" /> Standings / Tabela
                                </button>
                            </Link>
                        )}
                        <Link to={`/schedule/`}>
                            <button>
                                {' '}
                                <IoMdFootball className="icon" /> Results / Wyniki
                            </button>
                        </Link>
                        <Link to={`/timetable/`} onClick={() => dispatch(currentSchedule())}>
                            <button>
                                <AiOutlineSchedule className="icon" /> Timetable / Terminarz
                            </button>
                        </Link>
                    </div>
                    <div className="matches-container ui container segment">
                        <div>
                            <div>
                                <h3>
                                    {schedulesInfo && schedulesInfo.filters && schedulesInfo.filters.matchday}. kolejka
                                </h3>
                                <button onClick={() => dispatch(previousSchedule())}>
                                    <IoMdArrowBack className="icon" />{' '}
                                </button>
                                <button onClick={() => dispatch(nextSchedule())}>
                                    <IoMdArrowForward className="icon" />{' '}
                                </button>
                            </div>
                            <div className="schedule">
                                {schedules &&
                                    schedules.map((match) => (
                                        <div key={match.id} className="matches-segments ui segment">
                                            {match.homeTeam.name} <strong>{match.score.fullTime.homeTeam}</strong> -{' '}
                                            <strong>{match.score.fullTime.awayTeam}</strong> {match.awayTeam.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Timetable;
