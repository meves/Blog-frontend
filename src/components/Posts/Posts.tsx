import { Avatar, Grid, Stack, Button } from '@mui/material';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AvatarPhoto from '../../assets/avatar.jpg';
import { getCountUsersSelector, getPageUsersSelector, getUsersErrorSelector, 
         getUsersIsFetchingSelector, getUsersSelector } from '../../redux/selectors/users-selector';
import { getPostsSelector, getPostsIsFetchingSelector, getPostsErrorSelector } from '../../redux/selectors/posts-selectors';
import { getPosts } from '../../redux/slices/postsSlice';
import { getUsers } from '../../redux/slices/usersSlice';

const Author = styled.div`
    font-size: 1rem;
    padding: 0.5em 1em;
    background-color: var(--background-color);
`;

const Post = styled.div`
    font-size: 1rem;
    padding: 0.5em 1em;
    background-color: var(--background-color);
`;

const Posts: FC = (props) => {    
    // get users from state
    const usersIsFetching = useAppSelector(getUsersIsFetchingSelector);
    const usersError = useAppSelector(getUsersErrorSelector);
    const users = useAppSelector(getUsersSelector);
    // get posts from state
    const posts = useAppSelector(getPostsSelector);
    const postsIsFetching = useAppSelector(getPostsIsFetchingSelector);
    const postsError = useAppSelector(getPostsErrorSelector);
    // get page and count from state
    const currentPage = useAppSelector(getPageUsersSelector);
    const currentCount = useAppSelector(getCountUsersSelector);
    // get the same users as on posts page to display 
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsers(currentPage, currentCount));
    }, [dispatch]);
    // get posts for user
    useEffect(() => {
        if (users.length !== 0) {
            dispatch(getPosts(users[0].id));        
        }
    }, [users, dispatch]);
    const handleClick = (event: React.SyntheticEvent) => {
        dispatch(getPosts(Number(event.currentTarget.id)));
    }
    // users to be displayed
    const usersItems = users?.map(user => (
            <Author key={user.id} id={`${user.id}`} onClick={handleClick}>
                <Avatar alt={user.name} src={AvatarPhoto}/>
                <p>{user.name}</p>
                <p>{user.country}</p>
                <p>{user.city}</p>
                <div><Button color="secondary">Show posts</Button></div>
            </Author>
    ))
    // posts to be displayed
    const postsItems = posts.map(post => (
        <Post key={post.id}>
            <h2>{post.header}</h2>
            <p>{post.txt}</p>
            <p><time dateTime={post.dt}>{post.dt}</time></p>
        </Post>
    ))
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Stack spacing={2} direction="column">
                    { usersIsFetching ? 'Loading...' : !usersError ? usersItems : 'Something went wrong' }
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2} direction="column">
                    { postsIsFetching ? 'Loading...' : !postsError ? postsItems : 'Something went wrong' } 
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Posts;
