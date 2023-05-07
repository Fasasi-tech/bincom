import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div className='container' id='Skills'>
        <h1 className='skills'>Skills</h1>
        <div className='skills_flex'>
            <ul className='ul'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
            </ul>
            <ul className='ul'>
                <li>React</li>
                <li>Node.js</li>
                <li>Git</li>
            </ul>
            <ul className='ul'>
                <li>Express</li>
                <li>Material UI</li>
                <li>SCSS</li> 
            </ul>
        </div>
        <div className='leadership'>
            <h4 className='lead'>Leadership Experience</h4>
            <p className='academic'>Academic Director,</p>
            <p className='sub_academy'>Organized tutorials for physics students with over 70% of passes</p>
        </div>
        <div className='honour'>
            <h4 className='lead'>Honour and Award</h4>
            <p>Most intelligent student in department of physics, Olabisi Onabanjo University</p>
        </div>
        <div className='honour'>
            <h4 className='lead'>Education</h4>
            <p>B.Sc Physics(Second Class Upper Division) - Olabisi Onabanjo University</p>
        </div>
        <div className='honour'>
            <h4 className='lead'>Certification</h4>
            <p className='cert'>The complete 2023 web development bootcamp</p>
            <p className='cert'>Jobberman accelerated soft skills training</p>
            <p className='cert'>Meta backend developer professional certificate</p>
        </div>
    </div>
  )
}

export default Skills