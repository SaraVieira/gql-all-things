export const resolvers = {
  Mutation: {
    openModal: (_, params, { cache }) => {
      const data = {
        modal: {
          visible: true,
          _typename: 'modal'
        }
      }
      cache.writeData({ data })
      return null
    }
  }
}
