import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Canva from '../components/Canva'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'




const Home: NextPage = () => {


  const  [loading,setLoading] = useState<Boolean>(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
        setLoading(false)
    }, 2500)
  },[])



  return (
 
    <>
  
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence> 
     {loading ? <motion.div exit={{ opacity: 0,y:"-100vh",}} initial={{y:"100vh"}} animate={{y:0}}> <h1 className='bg-black text-white h-screen flex justify-center items-center text-[5vw]'  >Wait a minute</h1> </motion.div>  
     :(
     <>
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
      <h1 id='About' className='mt-[2000px]'>test</h1>
      </>)
}
</AnimatePresence>  
      
    </>

  )
}

export default Home
