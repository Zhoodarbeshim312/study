import { combineReducers, configureStore } from "@reduxjs/toolkit";
import langSlice from "./slices/langSlice";

const rootReducer = combineReducers({
  langReducer: langSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
