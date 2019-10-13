import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';

import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NoRegisteredUser } from './pages/NoRegisteredUser';
import { NavBar } from './components/NavBar';

export const App = () => {
  const UserLogged = ({ children }) => {
    return children({ isAuth: false });
  };
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
        {({ isAuth }) => {
          return isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NoRegisteredUser path="/favs" />
              <NoRegisteredUser path="/user" />
            </Router>
          );
        }}
      </UserLogged>
      <NavBar />
    </div>
  );
};
