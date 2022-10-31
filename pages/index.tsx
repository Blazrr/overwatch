import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Canva from '../components/Canva'
import Header from '../components/Header'
import Peer from '../components/Peer'


const Home: NextPage = () => {
  return (
    <div className="h-[300vh]">
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
      <Peer/>
      <h1 className='text-4xl'>fewf</h1>
      <h1 id='About' className='mt-[2000px]'>test</h1>
    </div>
  )
}

export default Home
