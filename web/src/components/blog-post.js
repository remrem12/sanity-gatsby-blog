import { format, distanceInWords, differenceInDays } from 'date-fns'
import React, { useState, useEffect } from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'
import styles from './blog-post.module.css'
import { SolarSystemLoading } from 'react-loadingg'
import './blog-post.css'

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props

  const [isLoading, done] = useState(true)
  // // // componentdidmount
  useEffect(() => {
    if (isLoading) {
      done(!isLoading)
    }
  })


  return (
    <>
      {
        isLoading ? <SolarSystemLoading
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
      <article className={styles.root}>
        {mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <div className = 'img-layer back'>
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  // .width(1200)
                  // .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .auto('format')
                  .url()}
                alt={mainImage.alt}
              />
            </div>
            
            <div className = 'img-layer fore'>
              <div className = 'blog-img-wrapper'>
                <img
                  src={imageUrlFor(buildImageObj(mainImage))
                    .fit('crop')
                    .auto('format')
                    .url()}
                  alt={mainImage.alt}
                />
              </div>
              
            </div>
            
          </div>
        )}
        <Container>
          <div className={styles.grid}>
            <div className={styles.mainContent}>
              <h1 className={styles.title}>{title}</h1>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
            <aside className={styles.metaContent}>
              {publishedAt && (
                <div className={styles.publishedAt}>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do, YYYY')}
                </div>
              )}
              {authors && <AuthorList items={authors} title='Tác giả' />}
              {categories && (
                <div className={styles.categories}>
                  <h3 className={styles.categoriesHeadline}>Chủ đề</h3>
                  <ul>
                    {categories.map(category => (
                      <li key={category._id}>{category.title}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </article>
    </>
  )
}

export default BlogPost
