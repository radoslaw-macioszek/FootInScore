const name = 'LEAGUES_REDUCER';

export const LOAD_LEAGUES = `${name}/LOAD_LEAGUES`;
export const LOAD_LEAGUES_SUCCESS = `${name}/LOAD_LEAGUES_SUCCESS`;
export const LOAD_LEAGUES_FAILED = `${name}/LOAD_LEAGUES_FAILED`;

export const loadLeaguesAction = () => ({
    type: LOAD_LEAGUES
});

export const loadLeaguesSuccess = (data) => ({
    type: LOAD_LEAGUES_SUCCESS,
    payload: data
});

export const loadLeaguesFailed = () => ({
    type: LOAD_LEAGUES_FAILED
});

const INITIAL_STATE = {
    data: {},
    loading: false,
    error: ''
};

const leaguesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_LEAGUES: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_LEAGUES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        }
        case LOAD_LEAGUES_FAILED: {
            return {
                ...state,
                loading: false,
                error: 'LEAGUE ERROR'
            };
        }
        default: {
            return state;
        }
    }
};

export default leaguesReducer;
