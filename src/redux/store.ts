import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slices/usersSlice';
import postsReducer from './slices/postsSlice';

export const store = configureStore({
    reducer: {
        usersPage: usersReducer,
        postsPage: postsReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
/**
 * createAsyncThunk: abstracts the standard "dispatch actions before/after an async request" pattern
 * createEntityAdapter: prebuilt reducers and selectors for CRUD operations on normalized state
 * createSelector: a re-export of the standard Reselect API for memoized selectors
 * createListenerMiddleware: a side effects middleware for running logic in response to dispatched actions
 */