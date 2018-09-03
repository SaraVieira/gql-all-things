import React from 'react'
import Modal from 'react-modal'
import { Query } from 'react-apollo'
import { GET_MODAL } from './queries'

export default () => (
  <div>
    <Query query={GET_MODAL}>
      {({ loading, error, modal: { modalvisible } }) => {
        if (loading) {
          return <Text>'loading'</Text>
        }
        if (error) return <Text>`Error!: ${error}`</Text>
        return (
          <Modal visible={modalvisible}>
            <Text>Of course they do </Text>
          </Modal>
        )
      }}
    </Query>
  </div>
)
