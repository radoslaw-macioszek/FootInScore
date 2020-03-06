import { fork } from 'redux-saga/effects';

import matchesSaga from './matches/matches.saga';
import teamsSaga from './teams/teams.saga';
import leaguesSaga from './leagues/leagues.saga';
import standingsSaga from './standings/standings.saga';
import schedulesSaga from './schedules/schedules.saga';

export default function* rootSaga() {
    yield fork(matchesSaga);
    yield fork(teamsSaga);
    yield fork(leaguesSaga);
    yield fork(standingsSaga);
    yield fork(schedulesSaga);
}
