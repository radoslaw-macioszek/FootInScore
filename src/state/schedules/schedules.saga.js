import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_SCHEDULES, NEXT_SCHEDULE, PREVIOUS_SCHEDULE } from './schedules.reducer';
import { loadSchedulesSuccess, loadSchedulesFailed } from './schedules.reducer';

function* loadSchedules() {
    const matchday = yield select((state) => state.schedulesReducer.matchday);
    const league = yield select((state) => state.schedulesReducer.league);

    const response = yield call(
        axios.get,
        `https://api.football-data.org/v2/competitions/${league}/matches?matchday=${matchday && matchday}`,
        {
            headers: {
                'X-Auth-Token': '99841ff67eba4e2d938d87714da190b6'
            }
        }
    );

    if (response.status === 200) {
        yield put(loadSchedulesSuccess(response.data));
        return;
    }
    yield put(loadSchedulesFailed());
}

export default function* schedulesSaga() {
    yield takeLatest(NEXT_SCHEDULE, loadSchedules);
    yield takeLatest(PREVIOUS_SCHEDULE, loadSchedules);
    yield takeLatest(LOAD_SCHEDULES, loadSchedules);
}
