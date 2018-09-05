import { Query } from 'react-apollo'

export default ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Text>'loading'</Text>
      }
      if (error) return <Text>`Error!: ${error}`</Text>
      return children(data)
    }}
  </Query>
)
