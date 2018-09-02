const MODAL = gql`
  {
    modalOpen @client
  }
`

export default () => (
  <Query query={MODAL}>
    {({ data, client }) => (
      <Fragment>
        <button
          onClick={() =>
            client.writeData({
              data: { modal: { isOpen: true } }
            })
          }
        >
          A MODAL
        </button>
        <Modal isOpen={data.modalOpen}>YEAH SON</Modal>
      </Fragment>
    )}
  </Query>
)
