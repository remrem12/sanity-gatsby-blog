import React from 'react'

const FilterCate = (catesArr) => (
    <div className='filter-group-button'>
      {
        catesArr.catesArr.map(cate => {
          return (<div className='filter-button waves-effect btn' key={cate.node.id}>{cate.node.title}</div>)
        })
      }
    </div>
  )


export default FilterCate