import React from 'react'
import Modal from 'react-modal'
import { Query } from './components/'
import { GET_MODAL } from './queries/'

export default () => (
  <div>
    <Query query={GET_MODAL}>
      {({ modal: { modalIsOpen } }) => (
        <Modal isOpen={modalIsOpen}>
          <h1>Of course they do. </h1>
        </Modal>
      )}
    </Query>
  </div>
)
