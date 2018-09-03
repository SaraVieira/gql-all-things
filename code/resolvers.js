export const resolvers = {
  Mutation: {
    openModal: (_, params, { cache }) => {
      const data = {
        modal: {
          modalvisible: true,
          _typename: 'modal'
        }
      }
      cache.writeData({ data })
      return null
    }
  }
}
