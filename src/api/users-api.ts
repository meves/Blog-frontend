import { IUserType } from "../app/types";
import { baseURL } from './constants';

export const usersApi = {
    getUsers: async () => {
        const response = await fetch(`${baseURL}users`, { method: 'GET' });
        return response;
    },
    getUser: async (userId: number) => {
        const response = await fetch(`${baseURL}users/${userId}`);
        return response;
    }   
}
