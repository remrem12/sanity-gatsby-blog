import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
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


      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}


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
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
