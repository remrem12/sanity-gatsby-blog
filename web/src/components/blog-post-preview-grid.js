import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import styles from './blog-post-preview-grid.module.css'
import Slug from './Slug'

const conbineClass = arr => {
  let result = '';
  for(let i = 0; i < arr.length; i++){
    result = result + Slug(arr[i].title) + ' '
  }
  return result
}

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={`${styles.grid} grid`}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id} className = {conbineClass(node.categories)}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
