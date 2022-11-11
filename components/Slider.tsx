import Image from 'next/image'
import React from 'react'

type Props = {}

const Slider = (props: Props) => {



    const sliderImages= ["https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/1SHOTLogo.png/revision/latest/scale-to-width-down/120?cb=20160621183146", "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d8/Abstract_PNG.png/revision/latest/scale-to-width-down/120?cb=20161217050407", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/BegeniusESCLogo.png/revision/latest/scale-to-width-down/100?cb=20160712201600",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6a/Boston_Uprising.png/revision/latest/scale-to-width-down/120?cb=20180402095801",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fd/Cloud9.png/revision/latest/scale-to-width-down/120?cb=20160808211504", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c8/DangerDogsLogo.png/revision/latest/scale-to-width-down/120?cb=20160712195914",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/62/Florida_Mayhem.png/revision/latest/scale-to-width-down/115?cb=20210601022521",
     "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4c/Fnatic.png/revision/latest/scale-to-width-down/117?cb=20160822032907", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1d/GaleForceEsportsLogo.png/revision/latest/scale-to-width-down/120?cb=20160621183546",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1a/IGFire.png/revision/latest/scale-to-width-down/96?cb=20160822032923",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/80/JHGaming.png/revision/latest/scale-to-width-down/107?cb=20160822032939", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/59/Meltyesportsclublogo.png/revision/latest/scale-to-width-down/102?cb=20160711225515",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/65/NorthernGamingRedLogo.png/revision/latest/scale-to-width-down/120?cb=20160621071025", 

    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ec/REUNITEDLogo.png/revision/latest/scale-to-width-down/120?cb=20160708104124", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/0a/Roguelogo.jpg/revision/latest/scale-to-width-down/120?cb=20160711225353",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/75/Splycegaming.png/revision/latest/scale-to-width-down/120?cb=20160621194633",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fd/Cloud9.png/revision/latest/scale-to-width-down/120?cb=20160808211504",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Team_EnVyUs-logo.png/revision/latest/scale-to-width-down/120?cb=20160808210454", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d8/TeamLiquidlogo.png/revision/latest/scale-to-width-down/120?cb=20160621192508", 
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f9/LGD.png/revision/latest/scale-to-width-down/120?cb=20160822032954",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Team_EnVyUs-logo.png/revision/latest/scale-to-width-down/120?cb=20160808210454",
   

]


  return (

    <>

    <h1 className='text-center mt-8 lg:mt-16 text-[3vw] text-bold' id='E-Sport'>Featuring the biggest E-Sports Orgs</h1>
    <div className='logo-container'>

        <div className='logo-div scroll'>

            {
                sliderImages.map((image, id) => {
                    return(
                        <div className='border-4 border-[#218ffe] rounded p-2 imageStyle'>
                        <div className='logo' key={id}>
                        <Image src={image} fill object-fit alt='jsp'/>
                         </div>
                         </div>
                    )
                })
            }

        </div>

        <div className='logo-div scroll'>

        {
                sliderImages.map((image, id) => {
                    return(
                        <div className='border-4 border-[#218ffe] rounded p-2 imageStyle'>
                        <div className='logo' key={id}>
                        <Image src={image} fill object-fit alt='jsp'/>
                         </div>
                         </div>
                    )
                })
            }

        </div>

        

    </div>

    </>
  )
}

export default Slider