import React from 'react'
import { FaTwitter, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import {motion, AnimatePresence, Variants} from "framer-motion"


type Props = {}

const Navbar = (props: Props) => {

 
    const liContent = ["About","News", "Pricing", "Roadmap", "Pitch Deck", "Team", "Faq", "Contact"]

    const navbarVariants : Variants = {
        hidden:{
            x:"100vw",
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
            transition: {
                when:"beforeChildren",
                staggerChildren:.1,
                staggerDirection:-1,
                ease: "easeOut"
            }
        },
        exit:{
            x:"100vw",
            opacity:0,
            transition: {
                when:"afterChildren",
                staggerChildren:.1,
                staggerDirection:1,
                ease: "easeIn"
            }
          
        }
    }

    const itemVariants : Variants = {
        hidden:{
            opacity:0,
            y:400
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                ease: "easeOut"
            },
        },
        exit:{
            opacity:0,
            y:400,
            transition: {
                ease: "easeOut"
            }
        }
        
      
    }



    return (
            <motion.div className='fixed flex w-full h-screen top-0 bg-purple-600 bg-opacity-60'
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
                
                <motion.ul className='flex flex-col mx-auto items-center justify-center w-full space-y-12 '>

                    {liContent.map((li, id) => {
                        return (
                            <motion.div className='group flex group/item items-center space-x-4' variants={itemVariants} key={id}>
                                <a className='go'>Go</a>
                                <li className='hoverLi'>{li}</li>
                                <a className='go'>Go</a>
                            </motion.div>
                        )
                    })}

                
                </motion.ul>

                <motion.footer className='justify-center flex  bottom-0 w-full fixed space-x-4 mb-10' variants={itemVariants}>
                    <FaTwitter className='socials ' />
                    <FaLinkedin className='socials ' />
                    <FaTelegram className='socials ' />
                    <FaYoutube className='socials ' />
                </motion.footer>
            </motion.div>
          
    )
}

export default Navbar