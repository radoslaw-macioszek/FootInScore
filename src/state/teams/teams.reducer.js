const name = "TEAMS_REDUCER";

export const LOAD_TEAMS = `${name}/LOAD_TEAMS`;
export const LOAD_TEAMS_SUCCESS = `${name}/LOAD_TEAMS_SUCCESS`;
export const LOAD_TEAMS_FAILED = `${name}/LOAD_TEAMS_FAILED`;

export const loadTeamsAction = (match) => ({
	type: LOAD_TEAMS,
	payload: {
		match,
	},
});

export const loadTeamsSuccess = (team1, team2) => {
	return {
		type: LOAD_TEAMS_SUCCESS,
		payload: {
			team1,
			team2,
		},
	};
};

export const loadTeamsFailed = () => ({
	type: LOAD_TEAMS_FAILED,
});

const INITIAL_STATE = {
	team1: {},
	team2: {},
	match: {},
	loading: false,
	error: "",
};

const teamsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_TEAMS: {
			return {
				...state,
				match: action.payload.match,
				loading: true,
				error: "",
			};
		}
		case LOAD_TEAMS_SUCCESS: {
			return {
				...state,
				loading: false,
				team1: action.payload.team1,
				team2: action.payload.team2,
			};
		}
		case LOAD_TEAMS_FAILED: {
			return {
				...state,
				loading: false,
				error: "TEAM ERROR",
			};
		}
		default: {
			return state;
		}
	}
};

export default teamsReducer;
