import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
query { 
  site{
    siteMetadata {
      description
      siteTitle:title
      author
      data {
        name
        age
      }
    }
  }
}`

const Header = () => {
  const { site: { siteMetadata: info } } = useStaticQuery(getData)
  // console.log(info)
  const title = info.siteTitle

  return (
    <div>
      <h2>author: {info.author}</h2>
      <h1>title: {title}</h1>
      <p>{info.description}</p>
    </div>
  )
}

export default Header
