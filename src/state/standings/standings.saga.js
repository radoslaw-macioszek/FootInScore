import { takeLatest, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_STANDINGS } from './standings.reducer';
import { loadStandingsSuccess, loadStandingsFailed } from './standings.reducer';

function* loadStandings(action) {
    const { id } = action.payload;
    const standings = yield select((state) => state.leaguesReducer.data.competitions);
    const standing = standings.filter((standing) => {
        return standing.id === id;
    })[0];

    const response = yield call(axios.get, `https://api.football-data.org/v2/competitions/${standing.id}/standings`, {
        headers: {
            'X-Auth-Token': '99841ff67eba4e2d938d87714da190b6'
        }
    });

    if (response.status === 200) {
        yield put(loadStandingsSuccess(response.data));
        return;
    }
    yield put(loadStandingsFailed());
}

export default function* standingsSaga() {
    yield takeLatest(LOAD_STANDINGS, loadStandings);
}
