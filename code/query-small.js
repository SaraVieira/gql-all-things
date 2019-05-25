import React from 'react'
import Modal from 'react-modal'
import useQuery from './components/query'
import { GET_MODAL } from './queries/'

export default () => {
  const { modal } = useQuery(GET_MODAL)
  return (
    <Modal visible={modal.visible}>
      <Text>Of course they do. </Text>
    </Modal>
  )
}
