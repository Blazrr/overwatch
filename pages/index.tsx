import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Canva from '../components/Canva'
import Header from '../components/Header'

import {motion, AnimatePresence} from 'framer-motion'
import Join from '../components/Join'
import Slider from '../components/Slider'




const Home: NextPage = () => {





  return (
 
    <>
  
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <header>
      <Header/>
      </header>

      <motion.div className='  h-[700px]   !mx-auto' initial={{opacity:0,y:-100}} animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            duration: 1,
          },
        }}>
      <Canva />
      </motion.div>

      <About/>
      <Join/>
      <Slider/>
      <h1 id='About' className='mt-[2000px]'>test</h1>
  


 
      
    </>

  )
}

export default Home
