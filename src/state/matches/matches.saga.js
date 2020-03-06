import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_MATCHES } from './matches.reducer';
import { loadMatchesSuccess, loadMatchesFailed } from './matches.reducer';

function* loadMatches() {
    const response = yield call(axios.get, 'http://api.football-data.org/v2/matches', {
        headers: {
            'X-Auth-Token': '99841ff67eba4e2d938d87714da190b6'
        }
    });
    if (response.status === 200) {
        yield put(loadMatchesSuccess(response.data));
        return;
    }

    yield put(loadMatchesFailed());
}

export default function* matchesSaga() {
    yield takeLatest(LOAD_MATCHES, loadMatches);
}

// http://api.football-data.org/v2/matches
// https://api.football-data.org/v2/competitions/PL/matches?matchday=11
