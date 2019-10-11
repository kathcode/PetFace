import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';

import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <NavBar />
    </div>
  );
};
