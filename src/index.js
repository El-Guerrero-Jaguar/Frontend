import React from 'react';
import { render } from 'react-dom';
import { AppContextProvider } from './context';

import App from './routes/App';

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('app'),
);
