export const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjke2kn7p00ol01d2pinkptdj/master',
  clientState: {
    defaults,
    resolvers
  }
})

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Main />
    </ApolloHooksProvider>
  </ApolloProvider>
)
