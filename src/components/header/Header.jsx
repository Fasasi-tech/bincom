import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './header.css'
const Header = () => {
  return (
    <div className='container'>
      <div  className='header_sub_div flex'>
        <div className='header'>
              <h2 className='first_heading'>Hi Bincom,</h2>
              <h2 className='second_heading'> I am Fasasi Ridwan</h2>
              <h4 className='third_heading'>FRONTEND DEVELOPER</h4>
              <p className='fourth_heading'>I am a self-taught frontend developer dedicated to building and optimizing user-focused website and applications. I am seeking for an internship position in Bincom where i can learn from inspiring developers and gain actual work experience</p>
          <div>
          <div className='my_works'>
            <a href='#Work' className='header_button'>View my works</a>
          </div>
              <div className='icon-tab'>
                <div>
                  <a href='https://twitter.com/lolade_ayinde'target="_blank" rel="noreferrer">
                    <BsTwitter className='icon'/>
                  </a> 
                </div>
                <div>
                  <a href='https://github.com/Fasasi-tech' target="_blank" rel="noreferrer">
                  <BsGithub className='icon'/>
                  </a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/fasasi-ridwan-ayinde' target="_blank" rel="noreferrer">
                  <BsLinkedin className='icon'/>
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div>
          <img src="images/ridwan.jpeg" alt="ridwan" className='ridwan_jpg' />
        </div>
      </div>
    </div>
  )
}

export default Header
