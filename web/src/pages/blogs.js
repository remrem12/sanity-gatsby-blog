import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import FilterCate from '../components/filter-cate'
import {responsiveTitle1} from '../components/typography.module.css'
// import '../js/isotope.js'

export const query = graphql`
query ArchivePageQuery {
  posts: allSanityPost(sort: {fields: [publishedAt], order: DESC}, filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
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
        categories {
          title
        }
      }
    }
  }
  cates: allSanityCategory {
    edges {
      node {
        title
        description
        id
      }
    }
  }
}
`

const ArchivePage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  return (
    <Layout>
      <SEO title='Tất cả' />
      <Container>
        <h1 className={responsiveTitle1}>Tất cả bài viết</h1>
        <FilterCate catesArr = {data.cates.edges}/>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes}/>}
      </Container>
    </Layout>
  )
}

export default ArchivePage
