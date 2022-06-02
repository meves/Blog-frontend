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
