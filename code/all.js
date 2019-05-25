const MODAL = gql`
  {
    modalOpen @client
  }
`

export default () => {
  const { data } = useQuery(MODAL)
  const client = useApolloClient()

  return (
    <>
      <button
        onClick={() =>
          client.writeData({
            data: { modal: { visible: true } }
          })
        }
      >
        A MODAL
      </button>
      <Modal visible={data.modal.visible}>YEAH SON</Modal>
    </>
  )
}
