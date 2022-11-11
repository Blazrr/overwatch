import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {

    const content = [
        {
            "role":"tank",
            "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium quisquam facilis officia, veniam quidem, labore deserunt corporis, distinctio voluptas impedit nesciunt quae delectus ipsa enim? Quis quam officia quidem?",
            'img':"https://thumbs.gfycat.com/BewitchedMajesticAoudad-size_restricted.gif"
        },
        {   
            "role":"support",
            "text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi corrupti repellendus suscipit libero quam delectus perspiciatis, eveniet quis, quae, cum soluta porro animi ad necessitatibus laudantium odio harum quos?",
            'img':"https://media1.giphy.com/media/RM5cIlnslWLKHPazW1/giphy.gif"
        },
        {
            "role":"dps",
            "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum veritatis aperiam quam. Voluptatum ullam, tenetur expedita obcaecati minima eum architecto velit accusantium. Mollitia recusandae magni ab! Doloremque, architecto dolorum.",
            'img':"https://66.media.tumblr.com/639c986ecd6d69820aaa6131a58e20b4/e2e79ce55f8e57d6-87/s540x810/5edcbe972abe40f702cc6a7aad7a9f22f66d201c.gif"
        }
    ]

  return (
    <div>
        <div className='text-center' id='playstyles'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#218ffe] from-[#405275]">Discover</span> mutliple playstyles</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Discover multiple roles, there strenghts and the weakness in overwacth 2</p>
        </div>
        <div className='space-y-8 md:space-y-12 lg:space-y-16'>
        {
            content.map((div, id) =>{
                return(
                    <div className='space-y-8 mt-16' key={id}>
                        <h1 className='text-4xl text-[#218ffe] text-center font-bold md:text-5xl lg:text-6xl' key={id}>{div.role}</h1>
                        <div className='lg:flex w-[92%] mx-auto lg:justify-between items-center justify-center'>
                        <p className=' mx-auto  md:text-lg lg:text-2xl lg:w-1/2'>{div.text}</p>
                        <div className='relative w-[250px] h-[120px] md:w-[320px] md:h-[250px] mx-auto lg:w-[700px] lg:h-[355px] items-center justify-center flex mt-8 lg:mt-0'>
                        <Image src={div.img}   object-fit="cover" alt='just imagine it' fill  className='rounded-md cursor-pointer '/>                      </div>
                        </div>
                </div>
                )})
        }
        </div>
    </div>

  )
}

export default About