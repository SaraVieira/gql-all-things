import React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { OPEN_MODAL } from './queries/'

export default () => {
  const openModal = useMutation(OPEN_MODAL)

  return <button onClick={openModal}>Everyone loves modals right?</button>
}
