import { IUserType } from "../app/types";
import { baseURL } from './constants';

export const usersApi = {
    getUsers: async (page: number, count: number) => {
        const response = await fetch(`${baseURL}users?page=${page}&count=${count}`, { method: 'GET' });
        return response;
    },
    getUser: async (userId: number) => {
        const response = await fetch(`${baseURL}users/${userId}`);
        return response;
    }   
}
