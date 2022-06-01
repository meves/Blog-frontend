import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserType } from "../../components/app/types";
import { AppDispatch } from "../store";

interface IUsersState {
    users: Array<IUserType>
    user: IUserType
}

const initialState: IUsersState = {
    users: [] as Array<IUserType>,
    user: {} as IUserType
}

const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        usersAdded: (state, action: PayloadAction<Array<IUserType>>) => {
            state.users = action.payload;
        },
        userAdded: (state, action: PayloadAction<IUserType>) => {
            state.user = action.payload;
        }
    }
});

export const { usersAdded, userAdded } = usersSlice.actions;

export default usersSlice.reducer;

export const getUsers = (): any => 
    async (dispatch: AppDispatch) => {
        const response = await fetch('http://localhost:3000/users', {method: "GET"});
        if (response.status === 200) {
            const users: Array<IUserType> = await response.json();
            dispatch(usersAdded(users));
        }
    }

export const getUser = (userId: number): any => 
    async (dispatch: AppDispatch) => {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {method: "GET"});
        if (response.status === 200) {
            const user = await response.json();
            dispatch(userAdded(user));
        }
    }