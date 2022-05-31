import { Avatar, Grid, Paper, Stack } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';
import Sergey from '../../assets/Sergey.jpg';

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
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Stack spacing={2} direction="column">
                    <Author>
                        <Avatar alt="Sergey" src={Sergey}></Avatar>Sergey
                    </Author>
                    <Author>
                        <Avatar alt="Sergey" src={Sergey}></Avatar>Sergey
                    </Author>
                    <Author>
                        <Avatar alt="Sergey" src={Sergey}></Avatar>Sergey
                    </Author>
                    <Author>
                        <Avatar alt="Sergey" src={Sergey}></Avatar>Sergey
                    </Author>
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
