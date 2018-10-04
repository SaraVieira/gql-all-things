const changeState = (client, value) =>
  client.writeData({
    data: { modalOpen: value }
  })

export default () => (
  <Query query={MODAL}>
    {({ data, client }) => (
      <Fragment>
        <button onClick={() => changeState(client, true)}>A MODAL</button>
        <Modal
          isOpen={data.modalOpen}
          onRequestClose={() => changeState(client, false)}
        >
          YEAH SON
        </Modal>
      </Fragment>
    )}
  </Query>
)
