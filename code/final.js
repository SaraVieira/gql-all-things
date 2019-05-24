const MODAL = gql`
  {
    modalOpen @client
  }
`

export default () => {
  const { data } = useQuery(MODAL)
  const client = useApolloClient()

  const changeState = value =>
    client.writeData({
      data: { modalOpen: value }
    })

  return (
    <Fragment>
      <button
        className="block f6 link dim br1 ba ph3 pv2 mb2 dib black ml6 mt5"
        onClick={() => changeState(true)}
      >
        A MODAL
      </button>
      <Modal isOpen={data.modalOpen} onRequestClose={() => changeState(false)}>
        <span className="center avenir ph3 pv2">YEAH SON</span>
      </Modal>
    </Fragment>
  )
}
