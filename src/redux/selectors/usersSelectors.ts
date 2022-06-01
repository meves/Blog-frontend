import { RootState } from "../store";

export const getUsersSelector = (state: RootState) => state.usersPage.users;
export const getUserSelector = (state: RootState) => state.usersPage.user;