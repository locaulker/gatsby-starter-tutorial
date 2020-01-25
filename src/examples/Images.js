import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/image-03.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    fixed: file(relativePath: {eq: "image-01.jpeg"}) {
      childImageSharp {
        fixed(width: 200, grayscale:true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image-02.jpeg"}) {
      childImageSharp {
        fluid(maxWidth:300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  // console.log(data)

  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className="basic" alt="Basic Image" />
      </article>
      <article>
        <h3>Fixed Image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align:center;
  text-transform: Capitalize;
  width: 80vw;
  margin: 2rem auto 10rem auto;

  .basic {
    width: 100%;
  }

  article {
    border: 3px solid purple;
    padding: 1rem 0;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
