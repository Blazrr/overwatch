import React, { useState } from 'react'
import { Squash as Hamburger, Squash } from 'hamburger-react'
import { globalAgent } from 'http'
import Navbar from './Navbar'
import {motion, AnimatePresence} from "framer-motion"
type Props = {}

const Header = (props: Props) => {
    // Pour le hamburger (navbar)
    const [isOpen, setOpen ] = useState(false) 


  return (
   <>
    <div className='fixed top-0 w-full z-10 '>
        <div className='flex justify-between w-[90%] p-8 mx-auto items-center   '>
            <h2 >logo</h2>
            <div className='cursor-pointer'>
            <Squash toggled={isOpen} toggle={setOpen} color="white"  />
            </div>
        </div>
    </div>
 <AnimatePresence>
    {isOpen && <Navbar/> }
   
    </AnimatePresence>
    </>
  )
}

export default Header