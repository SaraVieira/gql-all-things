import { Query } from './components/'
import { GET_MODAL } from './queries/'

export default () => (
  <Query query={GET_MODAL}>
    {({ modal: { isOpen } }) => (
      <Modal visible={isOpen}>
        <Text>Of course they do. </Text>
      </Modal>
    )}
  </Query>
)
