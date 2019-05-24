import React from 'react'
import Modal from 'react-modal'
import { Query } from 'react-apollo'
import { GET_MODAL } from './queries'

export default () => {
  const {
    data: { modal },
    loading,
    error
  } = useQuery(GET_MODAL)
  if (loading) {
    return <span>loading</span>
  }
  if (error) return <span>Error!: ${error}</span>
  return (
    <Modal visible={modal.visible}>
      <span>Of course they do </span>
    </Modal>
  )
}
