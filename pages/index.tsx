import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

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
      <h1 className='mt-[40%] text-center text-6xl'>KING BOB</h1>
    </div>
  )
}

export default Home
