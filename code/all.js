const MODAL = gql`
  {
    modalOpen @client
  }
`

export default () => (
  <Query query={MODAL}>
    {({ data, client }) => (
      <Fragment>
        <TouchableHighlight
          onClick={() =>
            client.writeData({
              data: { modal: { visible: true } }
            })
          }
        >
          <Text>A MODAL</Text>
        </TouchableHighlight>
        <Modal visible={data.modalOpen}>YEAH SON</Modal>
      </Fragment>
    )}
  </Query>
)
