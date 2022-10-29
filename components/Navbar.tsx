import React from 'react'
import { FaTwitter, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import {motion, AnimatePresence} from "framer-motion"


type Props = {}

const Navbar = (props: Props) => {

 
    const liContent = ["About","News", "Pricing", "Roadmap", "Pitch Deck", "Team", "Faq", "Contact"]



    return (
            <motion.div className='fixed flex w-full h-screen top-0 bg-purple-600 bg-opacity-60'>


                <motion.ul className='flex flex-col mx-auto items-center justify-center w-full space-y-12 '>

                    <div className='group flex group/item items-center space-x-4' >
                        <a className='go'>Go</a>
                        <li className='hoverLi'>About</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4' >
                        <a className='go'>Go</a>
                        <li className='hoverLi'>News</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4' >
                        <a className='go'>Go</a>
                        <li className='hoverLi'>Pricing</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4'>
                        <a className='go'>Go</a>
                        <li className='hoverLi'>Roadmap</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4'>
                        <a className='go'>Go</a>
                        <li className='hoverLi'>Pitch Deck</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4'>
                        <a className='go'>Go</a>
                        <li className='hoverLi'>Team</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4'>
                        <a className='go'>Go</a>
                        <li className='hoverLi'>Faq</li>
                        <a className='go'>Go</a>
                    </div>

                    <div className='group flex group/item items-center space-x-4'>
                        <a className='go'>Go</a>
                        <li className='hoverLi'>Contact</li>
                        <a className='go'>Go</a>
                    </div>

                </motion.ul>

                <motion.footer className='justify-center flex  bottom-0 w-full fixed space-x-4 mb-10'>
                    <FaTwitter className='socials ' />
                    <FaLinkedin className='socials ' />
                    <FaTelegram className='socials ' />
                    <FaYoutube className='socials ' />
                </motion.footer>
            </motion.div>
          
    )
}

export default Navbar