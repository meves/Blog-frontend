import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostType } from "../../app/types";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { postsApi } from "../../api/posts-api";

interface IPostsState {
    posts: Array<IPostType>
    post: IPostType
    isFetching: boolean
    error: string
}

const initialState: IPostsState = {
    posts: [] as Array<IPostType>,
    post: {} as IPostType,
    isFetching: false,
    error: ''
};

const postsSlice = createSlice({
    name: 'postsPage',
    initialState,
    reducers: {
        setIsFetching: (state) => {
            state.isFetching = true;
        },
        postsAddedSuccess: (state, action: PayloadAction<Array<IPostType>>) => {
            state.isFetching = false;
            state.error = '';
            state.posts = action.payload;
        },
        postsAddedError: (state, action: PayloadAction<string>) => {
            state.isFetching = false;
            state.error = action.payload;
        },
        postAddedSuccess: (state, action: PayloadAction<IPostType>) => {
            state.isFetching = false;
            state.error = '';
            state.post = action.payload;
        },
        postAddedError: (state, action: PayloadAction<string>) => {
            state.isFetching = false;
            state.error = action.payload;
        }
    }
});

export const { setIsFetching, postAddedError, postAddedSuccess, postsAddedError, postsAddedSuccess } = postsSlice.actions;

export default postsSlice.reducer;

type ThunkType = ThunkAction<Promise<void>, RootState, undefined, Action<typeof postsSlice.actions>>;

export const getPosts = (): ThunkType => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching());
            const response = await postsApi.getPosts();
            if (response.status === 200) {
                const posts = await response.json();
                dispatch(postsAddedSuccess(posts));
            }
        } catch (error) {
            dispatch(postsAddedError(`Error: ${error}`));
        }        
    }

export const getPost = (postId: number): ThunkType => 
    async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching());
            const response = await postsApi.getPost(postId);
            if (response.status === 200) {
                const post = await response.json();
                dispatch(postAddedSuccess(post));
            }
        } catch (error) {
            dispatch(postAddedError(`Error: ${error}`));
        }
    }
