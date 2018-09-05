const changeState = (client, value) =>
  client.writeData({
    data: { modalOpen: value }
  })

export default () => (
  <Query query={MODAL}>
    {({ data, client }) => (
      <Fragment>
        <TouchableHighlight onClick={() => changeState(client, true)}>
          A MODAL
        </TouchableHighlight>
        <Modal
          visible={data.modalOpen}
          onRequestClose={() => changeState(client, false)}
        >
          <Text>YEAH SON</Text>
        </Modal>
      </Fragment>
    )}
  </Query>
)
