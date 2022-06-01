import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostType } from "../../components/app/types";
import { AppDispatch } from "../store";

interface IPostsState {
    posts: Array<IPostType>
    post: IPostType
}

const initialState: IPostsState = {
    posts: [] as Array<IPostType>,
    post: {} as IPostType
};

const postsSlice = createSlice({
    name: 'postsPage',
    initialState,
    reducers: {
        postsAdded: (state, action: PayloadAction<Array<IPostType>>) => {
            state.posts = action.payload;
        },
        postAdded: (state, action: PayloadAction<IPostType>) => {
            state.post = action.payload;
        }
    }
});

export const { postsAdded, postAdded} = postsSlice.actions;

export default postsSlice.reducer;

export const getPosts = (): any => 
    async (dispatch: AppDispatch) => {
        const response = await fetch(`http://localhost:3000/posts`, {method: 'GET'});
        if (response.status === 200) {
            const posts = await response.json();
            dispatch(postsAdded(posts));
        }
    }

export const getPost = (postId: number): any => 
    async (dispatch: AppDispatch) => {
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {method: 'GET'});
        if (response.status === 200) {
            const post = await response.json();
            dispatch(postAdded(post));
        }
    }
