import { Query } from 'react-apollo'
import { GET_MODAL } from './queries'

export default () => (
  <Query query={GET_MODAL}>
    {({ loading, error, modal: { isOpen } }) => {
      if (loading) {
        return <Text>'loading'</Text>
      }
      if (error) return <Text>`Error!: ${error}`</Text>
      return (
        <Modal visible={isOpen}>
          <Text>Of course they do </Text>
        </Modal>
      )
    }}
  </Query>
)
