import { configureStore } from '@reduxjs/toolkit';

import rootReducer, { initialState } from './reducers';
import epicMiddleware, { rootEpic } from './epics';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(epicMiddleware),
  devTools: true
});

epicMiddleware.run(rootEpic);

export default store;