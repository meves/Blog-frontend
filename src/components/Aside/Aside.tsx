import { Paper } from '@mui/material';
import React, { FC } from 'react';
import { Friends } from './Friends/Friends';
import { Menu } from './Menu/Menu';
import styled from 'styled-components';

const Wrapper = styled.aside`
    background-color: var(--background-color);
`;

export const Aside: FC = (props) => {
    return (
        <Wrapper>
            <Menu/>
            <Friends/>
        </Wrapper>
    )
}