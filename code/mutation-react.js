import { Mutation } from 'react-apollo'
import { OPEN_MODAL } from './queries/'

export default () => (
  <Mutation mutation={OPEN_MODAL}>
    {openModal => (
      <TouchableHighlight onClick={openModal}>
        <Text> Everyone loves modals right?</Text>
      </TouchableHighlight>
    )}
  </Mutation>
)
