import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Loading } from './components/Loading/Loading';
import { Aside } from './components/Aside/Aside';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

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
