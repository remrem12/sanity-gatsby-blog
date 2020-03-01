import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import LoginSection from '../components/login-section'
import { SolarSystemLoading } from 'react-loadingg'


export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
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

  
  const [isLoading, done] = useState(true)
  // // // componentdidmount
  useEffect(() => {
    if (isLoading) {
      done(!isLoading)
    }
  })

  return (
    <>
      {isLoading ?
        <SolarSystemLoading
          size='large'
          style={{
            width: '100%',
            height: '100%',
            zIndex: '1000',
            margin: 'auto',
            position: 'absolute',
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
            background: '#fff'
          }}
        />
        : null
      }
      <Layout>
        <SEO
          title={site.title}
          description={site.description}
          keywords={site.keywords}
        />

        < Container >
          <LoginSection />
          {postNodes && (
            <BlogPostPreviewList
              title='Bài viết mới nhất'
              nodes={postNodes}
              browseMoreHref='/blogs/'
            />
          )}
        </Container>
      </Layout >
    </>
  )

}

export default IndexPage
