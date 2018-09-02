import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Main from './Main'

const client = new ApolloClient({
  // YOUR STUFF
})

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)
