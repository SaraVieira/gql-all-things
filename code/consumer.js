import React from 'react'
import { ApolloConsumer } from 'react-apollo'

export default () => (
  <ApolloConsumer>
    {cache => (
      <TouchableHighlight
        onClick={() =>
          cache.writeData({
            data: { modal: { visible: true } }
          })
        }
      >
        <Text>Everyone loves modals right ?</Text>
      </TouchableHighlight>
    )}
  </ApolloConsumer>
)
