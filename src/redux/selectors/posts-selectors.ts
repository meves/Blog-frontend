import { RootState } from "../store";

export const getPostsSelector = (state: RootState) => state.postsPage.posts;
export const getPostSelector = (state: RootState) => state.postsPage.post;
export const getPostsIsFetchingSelector = (state: RootState) => state.postsPage.isFetching;
export const getPostsErrorSelector = (state: RootState) => state.postsPage.error;
