import React from 'react'
import {Parallax} from "react-scroll-parallax"

type Props = {}

const Join = (props: Props) => {
  return (
    <div className='mt-8 lg:mt-16 flex flex-col items-center justify-center'>
    <div className='w-full border-2 border-black'></div>
    <Parallax translateX={[-50, 30]} className=" md:p-6 p-4 ">
        <h1 className='text-[3vw]  text-bold text-white text-center cursor-pointer '>Play the game now</h1>
  </Parallax>
  <div className='w-full border-2 border-black'></div>
  </div>
  )
}

export default Join