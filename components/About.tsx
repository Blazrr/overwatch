import React from 'react'

type Props = {}

const About = (props: Props) => {

    const content = [
        {
            "text":"loremfzfpkefa,pfnzfpezf,epfknzfknnnnnnnnn",
            'img':"okffzo"
        },
        {
            "text":"loremfzfpkefa,pfnzfpezf,epfknzfknnnnnnnnn",
            'img':"nnnn"
        },
        {
            "text":"loremfzfpkefa,pfnzfpezf,epfknzfknnnnnnnnn",
            'img':"fefzf"
        }
    ]

  return (
    <div>
        <div className='text-center'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#218ffe] from-[#405275]">Discover</span> mutliple playstyles</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">How many playstyles in overwacth 2</p>
        </div>

        {
            content.map((div) =>{
                <h1>test</h1>
            })
        }
        <div className='tanks'>

        </div>
    </div>
  )
}

export default About