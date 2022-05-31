import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
    font-size: 0.75rem;
    padding: 2em;
    background-color: var(--background-color);
`;

export const Footer: FC = (props) => {
    return (
        <Wrapper>
            <span>Author: Sergey Medvedkin &nbsp;</span>
            <span>Date: 30.05.2022</span>
        </Wrapper>
    )
}
