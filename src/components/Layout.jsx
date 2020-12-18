import React from 'react';
import { useAppContext } from '../context';

import Header from './Header';
import SidebarMenu from '../containers/SidebarMenu';
import SidebarCoach from '../containers/SidebarCoach';

const Layout = ({ children }) => {
  const [{ isCoach }] = useAppContext();

  return (
    <>
      <Header />
      {isCoach ? <SidebarCoach /> : <SidebarMenu />}
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
