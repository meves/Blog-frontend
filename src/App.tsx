import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Aside } from './components/Aside/Aside';
import { Footer } from './components/Footer/Footer';
import { Loading } from './components/Loading/Loading';

const Profile = React.lazy(() => import('./components/Profile/Profile'));
const Users = React.lazy(() => import('./components/Users/Users'));
const Posts = React.lazy(() => import('./components/Posts/Posts'));
const News = React.lazy(() => import('./components/News/News'));
const About = React.lazy(() => import('./components/About/About'));
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));

const App: React.FC = (props) => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {/**Header */}
        <Grid item xs={12}>
          <Header/>
        </Grid>
        {/**Main
         *    Aside */}
        <Grid item xs={3}>
          <Aside/>
        </Grid>
        {/**  Content */}
        <Grid item xs={9}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/profile" element={<React.Suspense fallback={<Loading/>}><Profile/></React.Suspense>}/>
            <Route path="/users" element={<React.Suspense fallback={<Loading/>}><Users/></React.Suspense>}/>
            <Route path="/posts" element={<React.Suspense fallback={<Loading/>}><Posts/></React.Suspense>}/>
            <Route path='/news' element={<React.Suspense fallback={<Loading/>}><News/></React.Suspense>}/>
            <Route path='/about' element={<React.Suspense fallback={<Loading/>}><About/></React.Suspense>}/>
            <Route path='/contacts' element={<React.Suspense fallback={<Loading/>}><Contacts/></React.Suspense>}/>
          </Routes>        
        </Grid>
        {/**Footer */}
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
