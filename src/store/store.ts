import type { AppState } from './rootReducer';
import { configureStore as configureReduxStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import type { PreloadedState, Reducer, StoreEnhancer } from '@reduxjs/toolkit';

const configureStore = (
	storeEnhancers: StoreEnhancer[],
	preloadedState?: PreloadedState<AppState>,
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
) => configureReduxStore({
	preloadedState,
	enhancers: storeEnhancers,
	reducer: rootReducer as Reducer<AppState>,
	devTools: import.meta.env.MODE === 'development',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});

const store = configureStore([]);

type AppStore = ReturnType<typeof configureStore>;
type AppDispatch = AppStore['dispatch'];
type AppGetState = AppStore['getState'];

export type { AppStore, AppDispatch, AppGetState };
export { store, configureStore };
