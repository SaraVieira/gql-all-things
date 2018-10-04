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
      <section>
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
      </section>
    )}
  </Query>
)
