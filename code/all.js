const MODAL = gql`
  query Modal {
    modal @client {
      isOpen
    }
  }
`

export default () => (
  <Query query={MODAL}>
    {({ data, client }) => (
      <View>
        <TouchableHighlight
          onClick={() =>
            client.writeData({
              data: { modal: { isOpen: true } }
            })
          }
        >
          <Text>A MODAL</Text>
        </TouchableHighlight>
        <Modal visible={data.modalOpen}>YEAH SON</Modal>
      </View>
    )}
  </Query>
)
