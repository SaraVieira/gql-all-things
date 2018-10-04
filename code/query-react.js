import { Query } from 'react-apollo'
import { GET_MODAL } from './queries'

export default () => (
  <Query query={GET_MODAL}>
    {({ loading, error, modal: { isOpen } }) => {
      if (loading) {
        return 'loading'
      }
      if (error) return `Error!: ${error}`
      return <Modal isOpen={isOpen}>Of course they do</Modal>
    }}
  </Query>
)
