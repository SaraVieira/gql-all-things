export const resolvers = {
  Mutation: {
    openModal: (_, params, { cache }) => {
      const data = {
        modal: {
          modalIsOpen: true,
          _typename: 'modal'
        }
      }
      cache.writeData({ data })
      return null
    }
  }
}
