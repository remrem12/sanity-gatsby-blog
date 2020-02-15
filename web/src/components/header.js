import { Link } from 'gatsby'
import React from 'react'
import './header.css'


const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  
  return (
    <div className="header" id="header">
      {/* <!--Navbar--> */}
      <nav className="navbar navbar-expand-lg navbar-light white">
        <div className="container-fluid">
          {/* <Link to='/'>{siteTitle}</Link> */}
          <Link to='/' className='navbar-brand'><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="mdb logo" /></Link>

          {/* <!-- Collapse button --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Links --> */}
          <div className="collapse navbar-collapse" id="basicExampleNav">
            {/* <!-- Left --> */}
            <ul className="navbar-nav m-auto menu">
              <li className="nav-item">
                <Link className="nav-link waves-effect" to="/">Trang chủ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link waves-effect" to="/about">Nghĩa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link waves-effect" to="/blogs">Blogs</Link>
              </li>
            </ul>

            {/* <!-- Right --> */}
            <ul className="navbar-nav nav-flex-icons social my-auto">
              <li className="nav-item">
                <a href="https://www.facebook.com/hakunonn" className="nav-link  waves-effect" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <div className="text-tooltip"><span>Facebook</span></div>
              </li>

              <li className="nav-item">
                <a href="mailto:buihuunghia.10hlvc@gmail.com" className="nav-link  waves-effect" target="_blank">
                  <i className="fab fa-google"></i>
                </a>
                <div className="text-tooltip"><span>Google</span></div>
              </li>

              <li className="nav-item">
                <a href="https://twitter.com/home" className="nav-link  waves-effect" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <div className="text-tooltip"><span>Twitter</span></div>
              </li>

              <li className="nav-item">
                <a href="https://github.com/remrem12" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <div className="text-tooltip"><span>Github</span></div>
              </li>

              <li className="nav-item">
                <a href="https://www.linkedin.com/in/ngh%C4%A9a-b%C3%B9i-h%E1%BB%AFu-b86004191/" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <div className="text-tooltip"><span>LinkedIn</span></div>
              </li>
            </ul>

          </div>

        </div>

      </nav>
    </div>
  )
}
export default Header
