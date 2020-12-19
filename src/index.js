import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { AppContextProvider } from './context';

import App from './routes/App';

const httpLink = createHttpLink({
  uri: 'http://ec2-3-21-233-42.us-east-2.compute.amazonaws.com:3000/api',
});

const linkError = onError(({ graphQLErrors, networkErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => (
      console.log(`[Graphql Error]: Message: ${message} Location: ${location} Path: ${path}`)
    ));
  }
  if (networkErrors) {
    console.log(`[Network Error]: ${networkErrors}`);
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: linkError.concat(httpLink),
});

render(
  <AppContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContextProvider>,
  document.getElementById('app'),
);
