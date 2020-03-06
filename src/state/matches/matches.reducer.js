const name = 'MATCHES_REDUCER';

export const LOAD_MATCHES = `${name}/LOAD_MATCHES`;
export const LOAD_MATCHES_SUCCESS = `${name}/LOAD_MATCHES_SUCCESS`;
export const LOAD_MATCHES_FAILED = `${name}/LOAD_MATCHES_FAILED`;

export const loadMatchesAction = () => ({
    type: LOAD_MATCHES
});

export const loadMatchesSuccess = (data) => ({
    type: LOAD_MATCHES_SUCCESS,
    payload: data
});

export const loadMatchesFailed = () => ({
    type: LOAD_MATCHES_FAILED
});

const INITIAL_STATE = {
    data: {},
    loading: false,
    error: ''
};

const matchesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_MATCHES: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_MATCHES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        }
        case LOAD_MATCHES_FAILED: {
            return {
                ...state,
                loading: false,
                error: 'MATCHES ERROR'
            };
        }
        default: {
            return state;
        }
    }
};

export default matchesReducer;
