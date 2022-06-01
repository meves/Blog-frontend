import { Avatar, Grid, Stack } from '@mui/material';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import AvatarPhoto from '../../assets/avatar.jpg';
import { getUsersSelector } from '../../redux/selectors/usersSelectors';
import { getPost, getPosts } from '../../redux/slices/postsSlice';
import { getUser, getUsers } from '../../redux/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

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
    const users = useAppSelector(getUsersSelector);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]); 
    const usersItems = users.map(users => (
            <Author key={users.id}>
                <Avatar alt={users.name} src={AvatarPhoto}/>
                <p>{users.name}</p>
                <p>{users.country}</p>
                <p>{users.city}</p>
            </Author>
    ))
    return (
        <Grid container spacing={2}>
            <button onClick={() => { dispatch(getPosts()); dispatch(getPost(2)); dispatch(getUser(2)); }}>Click</button>
            <Grid item xs={4}>
                <Stack spacing={2} direction="column">
                    { usersItems }
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2} direction="column">
                    <Post>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae aspernatur obcaecati modi praesentium ducimus omnis veniam quaerat nobis deserunt neque hic rem itaque, voluptate, necessitatibus totam fuga commodi facilis.
                    </Post>
                    <Post>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima quod magni eius quidem neque! Reiciendis inventore cupiditate autem dignissimos amet facilis modi alias, fuga similique vero voluptas rem quae!
                    </Post>
                    <Post>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non recusandae, natus eos asperiores quidem distinctio animi. Qui quod sequi deleniti blanditiis numquam, cumque atque obcaecati maiores? Cum sed error odio!
                    </Post>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Posts;
