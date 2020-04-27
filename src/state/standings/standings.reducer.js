const name = "STANDINGS_REDUCER";

export const LOAD_STANDINGS = `${name}/LOAD_STANDINGS`;
export const LOAD_STANDINGS_SUCCESS = `${name}/LOAD_STANDINGS_SUCCESS`;
export const LOAD_STANDINGS_FAILED = `${name}/LOAD_STANDINGS_FAILED`;

export const loadStandingsAction = (id) => ({
	type: LOAD_STANDINGS,
	payload: {
		id,
	},
});

export const loadStandingsSuccess = (data) => ({
	type: LOAD_STANDINGS_SUCCESS,
	payload: {
		data,
	},
});

export const loadStandingsFailed = () => ({
	type: LOAD_STANDINGS_FAILED,
});

const INITIAL_STATE = {
	data: [],
	id: null,
	loading: false,
	error: "",
};

const standingsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_STANDINGS: {
			return {
				...state,
				id: action.payload,
				loading: true,
				error: "",
			};
		}
		case LOAD_STANDINGS_SUCCESS: {
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		}
		case LOAD_STANDINGS_FAILED: {
			return {
				...state,
				loading: false,
				error: "STANDINGS ERROR",
			};
		}
		default: {
			return state;
		}
	}
};

export default standingsReducer;
