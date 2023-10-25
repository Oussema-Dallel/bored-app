import { combineReducers } from '@reduxjs/toolkit';

const combinedReducer = combineReducers({});

type AppState = ReturnType<typeof combinedReducer>;
type AppAction = Parameters<typeof combinedReducer>[1];

const reducer = (state: AppState, action: AppAction): AppState => {
	return combinedReducer(state, action);
};

export type { AppState, AppAction };
export default reducer;