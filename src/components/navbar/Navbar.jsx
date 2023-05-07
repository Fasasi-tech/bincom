import React, {useState} from 'react'
import './navbar.css'
import {motion} from 'framer-motion'
import {  HiX } from 'react-icons/hi';
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
    const [toggle, setToggle]=useState(false)
  return (
   <nav>
        <div className='navbar_sub_div container'>
            <div>
                <h1 className='title'>Bincom.dev</h1>
            </div>
            <ul className='unordered_list'>
              <li><a href='#Skills'>Skills</a></li>
              <li><a href='#Work'>Work</a></li>
              <li><a href='#Friends'>Friends</a></li> 
              <li><a href='#Contact'>Contact</a></li>  
            </ul>
            <div className='app__navbar-menu'>
              <BiMenuAltRight className='svg' onClick={()=>setToggle(true)} />
                {toggle && (
                    <motion.div
                    whileInView={{x:[250,0]}}
                    transition={{duration:0.85, ease: 'easeOut'}}
                    className="div">

                    <HiX onClick={()=>setToggle(false)} className="close"/>
                    <ul className='unlist'>
                        <li className="anchor">
                            <a href='#Skills' onClick={()=>setToggle(false)} >Skills</a>
                            <a href='#Work' onClick={()=>setToggle(false)} >Work</a>
                            <a href='#Friends' onClick={()=>setToggle(false)} >Friends</a>
                            <a href='#Contact' onClick={()=>setToggle(false)} >Contact</a>
                        </li>  
                    </ul>
                    </motion.div>
                )
                }
          </div>    
        </div>
   </nav>
  )
}

export default Navbar
