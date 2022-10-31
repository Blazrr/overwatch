import React, { useEffect, useState } from 'react'
import { Squash as Hamburger, Squash } from 'hamburger-react'
import { globalAgent } from 'http'
import Navbar from './Navbar'
import { motion, AnimatePresence } from "framer-motion"
type Props = {}

const Header = (props: Props) => {
  // Pour le hamburger (navbar)
  const [isOpen, setOpen] = useState(false)
  const [bob, setBob] = useState(false)

  const h1Variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1
      },
    }
  }

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: .4
      },
    },
    exit:{
      opacity: 0,
      y:-50,
     
    }
  }

 // Make the scrollbar disapear on ScrollDown
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos && !isOpen) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
 
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setBob(!bob)
      console.log(bob);
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);

  return (

    <>
    <AnimatePresence>
      { visible && 
      <motion.div className='fixed top-0 w-full z-20 '
      variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className='flex justify-between w-[90%] p-8 mx-auto items-center   '>
          <h2>logo</h2>
          <div className='cursor-pointer'>
            <Squash toggled={isOpen} toggle={setOpen} color="white" />
          </div>
        </div>
      </motion.div>    
      } 
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && <Navbar handleClick={() =>setOpen(false)} />}
      </AnimatePresence>

      <motion.h1 className='text-4xl font-bold text-white mt-40 w-[90%] text-center  mx-auto md:text-5xl lg:text-6xl'
        variants={h1Variants}
        initial="hidden"
        animate="visible"
      >
        Empowering people to share trade save energy</motion.h1>

      <motion.p
        variants={h1Variants}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 1,
            delay: .2
          },
        }}
        className='text-slate-6 w-[90%] text-center text-sm  mx-auto md:text-md lg:text-lg mt-4'>
        Our blockchain-enabled platform puts people at the centre of energy trading. You decide how much energy you save, share, or sell.
      </motion.p>

    </>
  )
}

export default Header