import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_LEAGUES } from './leagues.reducer';
import { loadLeaguesSuccess, loadLeaguesFailed } from './leagues.reducer';

function* loadLeagues() {
    const responsess = yield call(axios.get, 'http://api.football-data.org/v2/competitions/?plan=TIER_ONE', {
        headers: {
            'X-Auth-Token': '99841ff67eba4e2d938d87714da190b6'
        }
    });

    if (responsess.status === 200) {
        yield put(loadLeaguesSuccess(responsess.data));
        return;
    }

    yield put(loadLeaguesFailed());
}

export default function* leaguesSaga() {
    yield takeLatest(LOAD_LEAGUES, loadLeagues);
}
