import React from 'react'
import { useQuery } from 'react-apollo-hooks'

export default props => {
  const { data, loading, error } = useQuery(props)
  if (loading) return <span>loading</span>
  if (error) return <span>Error!: ${error}</span>

  return data
}
