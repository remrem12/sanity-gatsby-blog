import React, { useState, useEffect } from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

import Scrollbar from 'react-smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { SolarSystemLoading } from 'react-loadingg'

SmoothScrollbar.use(OverscrollPlugin);



const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, menuState }) => {

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
    </>
  )
}

export default Layout
