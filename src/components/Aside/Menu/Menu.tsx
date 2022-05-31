import React, { FC } from 'react';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotesIcon from '@mui/icons-material/Notes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkNav = styled(Link)`
    display: block;
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
`;

export const Menu: FC =(props) => {
    return (
        <div>
            <Paper sx={{ width: 320, maxWidth: '100%'}}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon><HomeIcon fontSize="small" color='primary'/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/">Home</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon><NotesIcon fontSize="small" color="info"/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/posts">Posts</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><ArticleIcon fontSize="small" color="info"/></ListItemIcon>                        
                        <ListItemText>
                            <LinkNav to="/news">News</LinkNav>
                        </ListItemText>                        
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><InfoIcon fontSize="small" color="info"/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/about">About</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><ContactsIcon fontSize="small" color="info"/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/contacts">Contacts</LinkNav>                                
                        </ListItemText>                        
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}