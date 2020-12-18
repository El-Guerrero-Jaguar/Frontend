import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAppContext } from '../context';

import Header from './Header';
import SidebarMenu from '../containers/SidebarMenu';
import SidebarCoach from '../containers/SidebarCoach';

const Layout = ({ children }) => {
  const [{ isCoach }] = useAppContext();
  const match = useRouteMatch('/');

  return (
    <>
      <Header />
      {(isCoach && !match) && <SidebarCoach />}
      {!isCoach && <SidebarMenu />}
      <main className={isCoach ? 'isCoach' : ''}>
        {children}
      </main>
    </>
  );
};

export default Layout;
