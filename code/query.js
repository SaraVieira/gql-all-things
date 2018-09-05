import { gql } from 'apollo-boost'

export default gql`
  query Modal {
    modal @client {
      isOpen
    }
  }
`
