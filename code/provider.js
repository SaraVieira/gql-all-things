import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Main from './Main'

const client = new ApolloClient({
  // YOUR STUFF
})

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Main />
    </ApolloHooksProvider>
  </ApolloProvider>
)
