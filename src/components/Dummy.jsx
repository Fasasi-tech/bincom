import React from 'react'
import './dummy.css'

const Dummy = ({product}) => {
  return (
    <div>
        <div className='div-img'>
          <img src={product.src} alt={product.title} className="product_img"/>
          <div className='div_link'>
            <h4 className='product-title'>{product.title}</h4>
            <div className='view'>
              <a href={product.link} target="_blank" rel="noreferrer" className='link'>View</a>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Dummy