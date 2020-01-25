import React from 'react'
import HeaderHook from '../examples/Header-Hook'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const examples = (props) => {
  // console.log(props)

  const { name, age } = props.data.site.siteMetadata.person

  return (
    <Layout>
      Examples Page
      <HeaderHook />
      <HeaderStatic />
      <div>
        this is our person
        <h4>name: {name}</h4>
        <h4>age: {age}</h4>
      </div>
    </Layout>
  )
}

export const getData = graphql`
query { 
  site{
    siteMetadata {
      description
      siteTitle:title
      author
      person:data {
        name
        age
      }
    }
  }
}`

export default examples
