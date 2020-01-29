import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
query lastpostQuery {
  post: allSanityPost(
    limit: 1
    sort: { fields: [publishedAt], order: DESC }
  ) {
    edges {
      node {
        _id
        publishedAt
        mainImage {
          alt
        }
        _rawExcerpt
        title
        slug {
          current
        }
      }
    }
  }
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    title
    description
    keywords
  }

}
`

const AboutPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title='Hữu Nghĩa'
      />
      <Container>
        {/* Card Regular */}
        <div className="card card-cascade">
          {/* Card image */}
          <div className="view view-cascade overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/* Card content */}
          <div className="card-body card-body-cascade text-center">
            {/* Title */}
            <h4 className="card-title"><strong>Bùi Hữu Nghĩa</strong></h4>
            {/* Subtitle */}
            <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
            {/* Text */}
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
              Facere modi sunt, quod quibusdam.
    </p>
            {/* Button */}
            <a className="btn btn-unique">Button</a>
          </div>
          {/* Card footer */}
          <div className="card-footer text-muted text-center">
            2 days ago
  </div>
        </div>
        {/* Card Regular */}

      </Container>
    </Layout>
  )
}

export default AboutPage
