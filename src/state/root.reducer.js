import { combineReducers } from 'redux';
import matchesReducer from './matches';
import teamsReducer from './teams';
import leaguesReducer from './leagues';
import standingsReducer from './standings';
import schedulesReducer from './schedules';

const reducers = {
    matchesReducer,
    teamsReducer,
    leaguesReducer,
    standingsReducer,
    schedulesReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
