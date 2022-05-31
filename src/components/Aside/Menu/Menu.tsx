import React, { FC } from 'react';
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotesIcon from '@mui/icons-material/Notes';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
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
            <Paper sx={{ maxWidth: '100%'}}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon><HomeIcon fontSize="small" color='primary'/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/">Home</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon><AccountCircleIcon fontSize="small" color="info"/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/profile">Profile</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><GroupIcon fontSize="small" color="info"/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/users">Users</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><NotesIcon fontSize="small" color="info"/></ListItemIcon>
                        <ListItemText>
                            <LinkNav to="/posts">Posts</LinkNav>
                        </ListItemText>
                    </MenuItem>
                    <Divider/>
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