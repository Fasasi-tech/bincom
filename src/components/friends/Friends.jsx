import React from 'react'
import './friends.css'

const Friends = () => {
  return (
    <div className='container friends_container' id='Friends'>
       <h1 className='skills'>My friends and I</h1>
        <div className='image_flex'>
            <div>
                <img src="images/loladep.png" alt="lolade" className='friends'/>
            </div>
            <div>
                <img src="images/rhodaspt.png" alt="rhodas" className='friends'/>
            </div>
            <div >
                <img src="images/walep.png" alt="wales"  className='friends'/>
            </div>
            <div >
                <img src="images/bimpesp.png" alt="bimpes" className='friends'/>
            </div>
            <div >
                <img src="images/fenugasp.png" alt="fenugas" className='friends'/>
            </div>
        </div>
    </div>
  )
}

export default Friends
