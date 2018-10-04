import { Query } from './components/'
import { GET_MODAL } from './queries/'

export default () => (
  <Query query={GET_MODAL}>
    {({ modal: { isOpen } }) => (
      <Modal isOpen={isOpen}>Of course they do.</Modal>
    )}
  </Query>
)
