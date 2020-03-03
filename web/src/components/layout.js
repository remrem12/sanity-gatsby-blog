import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';


SmoothScrollbar.use(OverscrollPlugin);



const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, menuState }) => {


  return (

    <div className='site-layout'>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} menuState={menuState}>
      </Header>
      {/* <ToTop /> */}

      <Scrollbar
        damping={0.12}
        thumbMinSize={20}
        renderByPixels={true}
        alwaysShowTracks={false}
        continuousScrolling={false}
        // onScroll={scrollFunc()}
      >
        <div style={{ height: 100 + 'vh' }} className='scroll-section'>
          <div className={styles.content}>{children}</div>
          <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
              <div className={styles.siteInfo}>
                &copy; {new Date().getFullYear()}, Hei's blog built with <a href='https://www.sanity.io'>Sanity</a>{' '}
                &amp;
          {` `}
                <a href='https://www.gatsbyjs.org'>Gatsby</a>
              </div>
            </div>
            {

            }
          </footer>
        </div>
      </Scrollbar>
    </div>

  )
}

export default Layout
