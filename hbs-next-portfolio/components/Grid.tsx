import React from 'react'

//UI components
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { TbBallpen, TbBrandReact, TbBrandUnity, TbBrandVscode, TbBriefcase, TbMail, TbPaperclip, TbSchool } from 'react-icons/tb'

//Fonts
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: 'variable'
})

const Grid = () => {
  return (
    <div className={playfair.className}>
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
            <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
            ))}
        </BentoGrid>
    </div>
  )
}

export default Grid

const items = [
  {
    title: "Explore my projects",
    description: "Have a look through some things I'm working on.",
    header: <div className='flex flex-row text-blue-300/50 justify-center align-middle'>
        <TbBrandVscode size={46}/> <TbBrandReact size={46}/> <TbBrandUnity size={46}/></div>,
  },
  {
    title: "Background",
    description: "Have a look through my eduaction and experiece.",
    header: <div className='flex flex-row text-blue-300/50 justify-center align-middle'>
        <TbSchool size={46}/> <TbBriefcase size={46}/> <TbBrandUnity size={46}/></div>,
  },
  {
    title: "Get in touch!",
    description: "Find my contact details and arrange to have a website made. Perfect for you.",
    header: <div className='flex flex-row text-blue-300/50 justify-center align-middle'>
        <TbMail size={46}/> <TbPaperclip size={46}/> <TbBallpen size={46}/></div>,
  },
];