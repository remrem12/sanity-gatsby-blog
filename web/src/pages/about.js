import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

const AboutPage = props => {
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