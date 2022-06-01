import { RootState } from "../store";

export const getPostsSelector = (state: RootState) => state.postsPage.posts;
export const getPostSelector = (state: RootState) => state.postsPage.post;
