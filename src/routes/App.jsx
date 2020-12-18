import React from 'react';
import { useAppContext } from '../context';

import '../assets/styles/main.scss';

const App = () => {
  const [state] = useAppContext();

  return (
    <h1>{state.text}</h1>
  );
};

export default App;
