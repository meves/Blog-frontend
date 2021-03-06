import { RootState } from "../store";

export const getUsersSelector = (state: RootState) => state.usersPage.users;
export const getUserSelector = (state: RootState) => state.usersPage.user;
export const getUsersIsFetchingSelector = (state: RootState) => state.usersPage.isFetching;
export const getUsersErrorSelector = (state: RootState) => state.usersPage.error;
export const getPageUsersSelector = (state: RootState) => state.usersPage.page;
export const getCountUsersSelector = (state: RootState) => state.usersPage.count;
