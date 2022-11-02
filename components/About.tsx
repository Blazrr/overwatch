import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {

    const content = [
        {
            "role":"tank",
            "text":"loremfzfpkefa,pfnzfpezf,epfknzfknnnn nzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnnnnnnn",
            'img':"https://66.media.tumblr.com/639c986ecd6d69820aaa6131a58e20b4/e2e79ce55f8e57d6-87/s540x810/5edcbe972abe40f702cc6a7aad7a9f22f66d201c.gif"
        },
        {   
            "role":"support",
            "text":"loremfzfpkefa,pfnzfpezf,epfknzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnn",
            'img':"https://66.media.tumblr.com/639c986ecd6d69820aaa6131a58e20b4/e2e79ce55f8e57d6-87/s540x810/5edcbe972abe40f702cc6a7aad7a9f22f66d201c.gif"
        },
        {
            "role":"dps",
            "text":"loremfzfpkefa,pfnzfpezf,epfknzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnn nzfknnnnnnnnn",
            'img':"https://66.media.tumblr.com/639c986ecd6d69820aaa6131a58e20b4/e2e79ce55f8e57d6-87/s540x810/5edcbe972abe40f702cc6a7aad7a9f22f66d201c.gif"
        }
    ]

  return (
    <div>
        <div className='text-center'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#218ffe] from-[#405275]">Discover</span> mutliple playstyles</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Discover multiple roles, there strenghts and the weakness in overwacth 2</p>
        </div>
        <div className='space-y-8'>
        {
            content.map((div, id) =>{
                return(
                    <div className='space-y-8 mt-16' key={id}>
                        <h1 className='text-4xl text-[#218ffe] text-center font-bold md:text-5xl lg:text-6xl' key={id}>{div.role}</h1>

                        <p className='w-[92%] mx-auto text-center md:text-lg lg:text-xl'>{div.text}</p>
                        <div className='relative flex  justify-center'>
                        <Image src={div.img}  width={320} height={320} alt='just imagine it'  className='rounded-md cursor-pointer ' />                        </div>
                </div>
                )
            })
        }
        </div>
       
    </div>

  )
}

export default About