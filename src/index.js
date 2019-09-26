import React from 'react';
import ReactDOM from 'react-dom';
// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { App } from './App';

const client = new ApolloClient({
  uri: 'https://kath-api.now.sh/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'),
);
