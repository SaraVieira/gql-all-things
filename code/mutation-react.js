import { Mutation } from 'react-apollo'
import { OPEN_MODAL } from './queries/'

export default () => (
  <Mutation mutation={OPEN_MODAL}>
    {openModal => (
      <button onClick={openModal}>Everyone loves modals right?</button>
    )}
  </Mutation>
)
