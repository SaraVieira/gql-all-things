export default () => {
  const client = useApolloClient()
  return (
    <button
      onClick={() =>
        client.writeData({
          data: { modal: { visible: true } }
        })
      }
    >
      Everyone loves modals right ?
    </button>
  )
}
