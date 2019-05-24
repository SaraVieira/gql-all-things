import React from 'react'
import { useQuery, useApolloClient } from 'react-apollo-hooks'

export default ({ children, ...props }) => {
  const { data, loading, error } = useQuery(...props)
  if (loading) return <span>'loading'</span>
  if (error) return <span>`Error!: ${error}`</span>

  return data
}
