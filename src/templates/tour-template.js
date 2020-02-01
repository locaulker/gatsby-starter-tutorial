import React from 'react'
import styles from '../css/template.module.css'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'


const TourTemplate = ({ data }) => {

  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey
  } = data.tour

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (<Image
                key={index}
                fluid={item.fluid}
                alt={name}
                className={styles.image}
              />)
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p><FaMoneyBillWave className={styles.icon} />Starting from ${price}</p>
            <p><FaMap className={styles.icon} />{country}</p>
          </div>
          <h4>Starts on: {start}</h4>
          <h4>Duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => {
              return (
                <li key={index}>{item.day}</li>
              )
            })}
          </ul>
          <Link to="/tours">Back to Tours Page</Link>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
query($slug:String!) {
  tour:contentfulTour(slug:{eq:$slug}) {
    name
    price
    country
    days
    start(formatString:"dddd: MMMM Do, YYYY")
    journey {
      day
      info
    }
    description {
      description
    }
    images {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`

export default TourTemplate
