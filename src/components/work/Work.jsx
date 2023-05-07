import React from 'react'
import './work.css'
import {dummyData} from '../../data/data'
import Dummy from '../Dummy'
const Work = () => {
  return (
    <div className='container skills_parent' id='Work'>
     <h1 className='skills'>Work</h1>
    <div className="work_img">
       {
        dummyData.map((product)=>(
            <Dummy product={product} key={product.id} />
        ))
       }
    </div>
    </div>
  )
}

export default Work