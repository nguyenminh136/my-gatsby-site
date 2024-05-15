import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Seo = ({ title }) => {
  const data = useSiteMetadata()

  return (
    <title>{title} | {data.title} | {data.header} </title>
  )
}

export default Seo