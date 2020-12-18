import React from 'react';
import { useAppContext } from '../context';

const Home = () => {
  const [{ isCoach }] = useAppContext();

  return (
    <h1>{isCoach ? 'Home coach' : 'Home Alumn'}</h1>
  );
};

export default Home;
