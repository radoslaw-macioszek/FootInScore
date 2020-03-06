import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_TEAMS } from './teams.reducer';
import { loadTeamsSuccess, loadTeamsFailed } from './teams.reducer';

function* loadTeams(action) {
    const { id } = action.payload;
    const matches = yield select((state) => state.matchesReducer.data.matches);
    const match = matches.filter((match) => {
        return match.id === id;
    })[0];

    const responses = yield all([
        call(axios.get, `https://api.football-data.org/v2/teams/${match.homeTeam.id}`, {
            headers: {
                'X-Auth-Token': '99841ff67eba4e2d938d87714da190b6'
            }
        }),
        call(axios.get, `https://api.football-data.org/v2/teams/${match.awayTeam.id}`, {
            headers: {
                'X-Auth-Token': '99841ff67eba4e2d938d87714da190b6'
            }
        })
    ]);

    if (responses[0].status === 200 && responses[1].status === 200) {
        yield put(loadTeamsSuccess(responses[0].data, responses[1].data));
        return;
    }
    yield put(loadTeamsFailed());
}

export default function* teamsSaga() {
    yield takeLatest(LOAD_TEAMS, loadTeams);
}
