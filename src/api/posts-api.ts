import { IPostType } from "../app/types";
import { baseURL } from "./constants"

export const postsApi = {
    getPosts: async (userId: number) => {
        const response = await fetch(`${baseURL}posts?userId=${userId}`);
        return response;
    },
    getPost: async (postId: number) => {
        const response = await fetch(`${baseURL}posts/${postId}`);
        return response;
    }
}
