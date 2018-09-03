import React from 'react'
import Modal from 'react-modal'
import { Query } from './components/'
import { GET_MODAL } from './queries/'

export default () => (
  <div>
    <Query query={GET_MODAL}>
      {({ modal: { modalvisible } }) => (
        <Modal visible={modalvisible}>
          <Text>Of course they do. </Text>
        </Modal>
      )}
    </Query>
  </div>
)
