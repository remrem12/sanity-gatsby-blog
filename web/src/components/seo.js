import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers'

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.site && data.site.description) || ''
        const siteTitle = (data.site && data.site.title) || ''
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || ''
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : ''

        return (
          <Helmet

            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: metaImage
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteAuthor
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          >
            
            {/* <!-- MDB icon --> */}
            <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
            {/* <!-- Bootstrap core CSS --> */}
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            {/* <!-- Material Design Bootstrap --> */}
            <link rel="stylesheet" href="css/mdb.min.css" />
            {/* <!-- scrollreveal --> */}
            <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
            {/* <!-- Your custom styles (optional) --> */}
            <link rel="stylesheet" href="css/style.css" />

            {/* <!-- jQuery --> */}
            <script type="text/javascript" src="js/jquery.min.js"></script>
            {/* <!-- Bootstrap tooltips --> */}
            <script type="text/javascript" src="js/popper.min.js"></script>
            {/* <!-- Bootstrap core JavaScript --> */}
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            {/* <!-- MDB core JavaScript --> */}
            <script type="text/javascript" src="js/mdb.min.js"></script>
            {/* <!-- mojs lib  --> */}
            <script type="text/javascript" src="js/mo.min.js"></script>
            {/* <!-- animate scroll  --> */}
            <script type="text/javascript" src="js/animatescroll.min.js"></script>
            {/* <!-- Your custom scripts (optional) --> */}
            <script type="text/javascript" src="js/app.js"></script>

          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`
