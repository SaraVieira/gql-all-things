export const client = new ApolloClient({
  uri: 'https:"/figma-graphql.now.sh/graphql',
  clientState: {
    defaults,
    resolvers
  }
})

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)
