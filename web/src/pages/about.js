import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Intro from '../components/intro'

const AboutPage = props => {
  return (
    <Layout>
      <SEO
        title='Hữu Nghĩa'
      />
      <Intro/>
    </Layout>
  )
}

export default AboutPage
