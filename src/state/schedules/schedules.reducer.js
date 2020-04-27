const name = "SCHEDULES_REDUCER";

export const CURRENT_SCHEDULE = `${name}/CURRENT_SCHEDULE`;
export const PREVIOUS_SCHEDULE = `${name}/PREVIOUS_SCHEDULE`;
export const NEXT_SCHEDULE = `${name}/NEXT_SCHEDULE`;
export const LOAD_SCHEDULES = `${name}/LOAD_SCHEDULES`;
export const LOAD_SCHEDULES_SUCCESS = `${name}/LOAD_SCHEDULES_SUCCESS`;
export const LOAD_SCHEDULES_FAILED = `${name}/LOAD_SCHEDULES_FAILED`;
export const LOAD_LEAGUE = `${name}/LOAD_LEAGUE`;

export const currentSchedule = (matchday) => ({
	type: CURRENT_SCHEDULE,
	payload: matchday,
});
export const loadLeague = (league) => ({
	type: LOAD_LEAGUE,
	payload: league,
});

export const previousSchedule = () => ({
	type: PREVIOUS_SCHEDULE,
});

export const nextSchedule = () => ({
	type: NEXT_SCHEDULE,
});

export const loadSchedulesAction = () => ({
	type: LOAD_SCHEDULES,
});

export const loadSchedulesSuccess = (data) => ({
	type: LOAD_SCHEDULES_SUCCESS,
	payload: data,
});

export const loadSchedulesFailed = () => ({
	type: LOAD_SCHEDULES_FAILED,
});

const INITIAL_STATE = {
	nextMatchday: "",
	matchday: "",
	data: {},
	league: "",
	id: null,
	loading: false,
	error: "",
};

const schedulesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CURRENT_SCHEDULE: {
			return {
				...state,
				matchday: action.payload,
				nextMatchday: action.payload + 1,
			};
		}
		case LOAD_LEAGUE: {
			return {
				...state,
				league: action.payload,
			};
		}
		case PREVIOUS_SCHEDULE: {
			return {
				...state,
				matchday: state.matchday - 1,
			};
		}
		case NEXT_SCHEDULE: {
			return {
				...state,
				matchday: state.matchday + 1,
			};
		}
		case LOAD_SCHEDULES: {
			return {
				...state,
				loading: true,
				error: "",
			};
		}
		case LOAD_SCHEDULES_SUCCESS: {
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		}
		case LOAD_SCHEDULES_FAILED: {
			return {
				...state,
				loading: false,
				error: "SCHEDULE ERROR",
			};
		}
		default: {
			return state;
		}
	}
};

export default schedulesReducer;
