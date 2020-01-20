import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  // <div classNameName={styles.root}>
  //   <div classNameName={styles.wrapper}>
  //     <div classNameName={styles.branding}>
  //       <Link to='/'>{siteTitle}</Link>
  //     </div>

  //     <button classNameName={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
  //       <Icon symbol='hamburger' />
  //     </button>

  //     <nav classNameName={cn(styles.nav, showNav && styles.showNav)}>
  //       <ul>
  //         <li>
  //           <Link to='/archive/'>Blogs</Link>
  //           <Link to='/abc/'>abc</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
  // </div>
  <div className="header" id="header">
    {/* <!--Navbar--> */}
    <nav className="navbar navbar-expand-lg navbar-light white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="mdb logo"/>
        </a>
        {/* <!-- Collapse button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Links --> */}
        <div className="collapse navbar-collapse" id="basicExampleNav">
          {/* <!-- Left --> */}
          <ul className="navbar-nav m-auto menu">
            <li className="nav-item active">
              <a className="nav-link waves-effect" href="#home">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect" href="/about.html">Nghĩa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect" href="#blogs">Blogs</a>
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

export default Header
