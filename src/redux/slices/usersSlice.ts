import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserType } from "../../app/types";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { usersApi } from "../../api/users-api";

interface IUsersState {
    users: Array<IUserType>
    user: IUserType
    isFetching: boolean
    error: string
    page: number
    count: number
}

const initialState: IUsersState = {
    users: [],
    user: {} as IUserType,
    isFetching: false,
    error: '',
    page: 1,
    count: 5
}

const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        setIsFetching: (state) => {
            state.isFetching = true;
        },
        setCurrentPage: (state, action) => {
            state.page = action.payload;
        },
        setCurrenCount: (state, action) => {
            state.count = action.payload;
        },
        usersAddedSuccess: (state, action: PayloadAction<Array<IUserType>>) => {
            state.isFetching = false;
            state.error = '';
            state.users = action.payload;
        },
        usersAddedError: (state, action: PayloadAction<string>) => {
            state.isFetching = false;
            state.error = action.payload;
        },
        userAddedSuccess: (state, action: PayloadAction<IUserType>) => {
            state.isFetching = false;
            state.user = action.payload;
            state.error = '';
        },
        userAddedError: (state, action: PayloadAction<string>) => {
            state.isFetching = false;
            state.error = action.payload;
        }
    }
});

export const { setIsFetching, userAddedError, userAddedSuccess, usersAddedError, usersAddedSuccess,
               setCurrentPage, setCurrenCount } = usersSlice.actions;

export default usersSlice.reducer;

type ThunkType = ThunkAction<Promise<void>, RootState, undefined, Action<typeof usersSlice.actions>>;

export const getUsers = (currentPage: number, currentCount: number): ThunkType => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching());
            dispatch(setCurrentPage(currentPage));
            dispatch(setCurrenCount(currentCount));
            const response = await usersApi.getUsers(currentPage, currentCount);
            if (response.status === 200) {
                const users = await response.json();
                dispatch(usersAddedSuccess(users));
            }
        } catch (error) {
            dispatch(usersAddedError(`Error: ${error}`));
        }
    }

export const getUser = (userId: number): ThunkType => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching());
            const response = await usersApi.getUser(userId);
            if (response.status === 200) {
                const user = await response.json();
                dispatch(userAddedSuccess(user));
            }
        } catch (error) {
            dispatch(userAddedError(`Error: ${error}`));
        }
    }
