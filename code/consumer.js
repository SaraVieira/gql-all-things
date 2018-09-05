import { ApolloConsumer } from 'react-apollo'

export default () => (
  <ApolloConsumer>
    {cache => (
      <TouchableHighlight
        onClick={() =>
          cache.writeData({
            data: { modal: { isOpen: true } }
          })
        }
      >
        <Text>Everyone loves modals right ?</Text>
      </TouchableHighlight>
    )}
  </ApolloConsumer>
)
