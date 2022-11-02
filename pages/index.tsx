import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Canva from '../components/Canva'
import Header from '../components/Header'




const Home: NextPage = () => {
  return (
    <>

    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <Header/>
      </header>
      <div className='  h-[700px]   !mx-auto'>
      <Canva />
      </div>
      <About/>
      <h1 id='About' className='mt-[6000px]'>test</h1>
    </div>

    </>
  )
}

export default Home
