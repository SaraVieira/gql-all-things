import React from 'react'
import Modal from 'react-modal'
import { Query } from 'react-apollo'
import { GET_MODAL } from './queries'

export default () => (
  <div>
    <Query query={GET_MODAL}>
      {({ loading, error, modal: { modalIsOpen } }) => {
        if (loading) {
          return 'loading man. Chill'
        }
        if (error) return `Error!: ${error}`
        return (
          <Modal isOpen={modalIsOpen}>
            <h1>Of course they do </h1>
          </Modal>
        )
      }}
    </Query>
  </div>
)
