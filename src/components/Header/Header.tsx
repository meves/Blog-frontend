import React, { ChangeEvent, FC, useState } from 'react';
import { Avatar, Switch } from '@mui/material';
import Sergey from '../../assets/Sergey.jpg';
import styled from 'styled-components';
import '../../fonts/fonts.css';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    font-family: 'Lobster', cursive;
    font-size: 2.5em;
    background-color: var(--background-color);
`;

const Logo = styled.div`    
`;

const Heading = styled.h1`
    padding-left: 0.5em;
    padding-right: 0.5em;
`;

const AuthGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 3em;
`;

export const Header: FC = (props) => {
    const [auth, setAuth] = useState(false);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // authentication
        setAuth(event.currentTarget.checked);
    }
    return (
        <Wrapper>
            <Logo>SM</Logo>
            <Heading>Blog</Heading>
            <AuthGroup>
                {auth && <Avatar alt="Sergey" src={Sergey}/>}                
                <Switch  onChange={handleChange} />
            </AuthGroup>
        </Wrapper>
    )
}
