import { gql } from 'apollo-boost'

export default gql`
  mutation openModal {
    openModal @client
  }
`
