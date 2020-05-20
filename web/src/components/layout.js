import React, {useState, useEffect} from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

// import Scrollbar from 'react-smooth-scrollbar'
// import SmoothScrollbar from 'smooth-scrollbar'
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import {SolarSystemLoading} from 'react-loadingg'
import ToTop from './to-top'
import AboutMe from './AboutMe'

// SmoothScrollbar.use(OverscrollPlugin)

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, menuState}) => {
  const [isLoading, done] = useState(true)
  const myRef = React.createRef()
  // // // componentdidmount
  useEffect(() => {
    if (isLoading) {
      done(!isLoading)
    }
  })

  const handleScroll = () => {
    const node = myRef.current
    const offset = node.scrollTop
    console.log(offset)
  }

  return (
    <>
      {isLoading ? (
        <SolarSystemLoading
          size='large'
          style={{
            width: '100%',
            height: '100%',
            zIndex: '999',
            margin: 'auto',
            position: 'absolute',
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
            background: '#fff'
          }}
        />
      ) : null}
      <div className='site-layout'>
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          menuState={menuState}
        />
        <ToTop />
        <AboutMe />

        <div className={styles.content} ref={myRef} onScroll={handleScroll}>{children}</div>

        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>
            <div className={styles.siteInfo}>
              &copy; {new Date().getFullYear()}, Hei's blog built with{' '}
              <a href='https://www.sanity.io'>Sanity</a> &amp;
              {` `}
              <a href='https://www.gatsbyjs.org'>Gatsby</a>
            </div>
          </div>
          {}
        </footer>
      </div>
    </>
  )
}

export default Layout
