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
}

const initialState: IUsersState = {
    users: [] as Array<IUserType>,
    user: {} as IUserType,
    isFetching: false,
    error: ''
}

const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        setIsFetching: (state) => {
            state.isFetching = true;
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

export const { setIsFetching, userAddedError, userAddedSuccess, usersAddedError, usersAddedSuccess } = usersSlice.actions;

export default usersSlice.reducer;

type ThunkType = ThunkAction<Promise<void>, RootState, undefined, Action<typeof usersSlice.actions>>;

export const getUsers = (): ThunkType => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching());
            const response = await usersApi.getUsers();
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
