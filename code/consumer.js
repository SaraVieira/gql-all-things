import { ApolloConsumer } from 'react-apollo'

export default () => (
  <ApolloConsumer>
    {cache => (
      <button
        onClick={() =>
          cache.writeData({
            data: { modal: { isOpen: true } }
          })
        }
      >
        Everyone loves modals right ?
      </button>
    )}
  </ApolloConsumer>
)
