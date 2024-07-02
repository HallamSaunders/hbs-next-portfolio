import React from 'react'
import Link from 'next/link';

//UI elements and icons
import { LampContainer } from './ui/lamp';
import { WavyBackground } from './ui/wavy-background';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Button } from './ui/moving-border';
import { SlArrowDown } from 'react-icons/sl';

//Fonts
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: 'variable'
})

const Hero = () => {
  return (
    <div className={playfair.className}>
        <div className="pb-20 pt-36 flex flex-col items-center justify-center">
            <div>
                <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
                />
                <Spotlight
                className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen"
                fill="white"
                />
            </div>
            <div className='mb-12'>
                <h1 className='text-center text-white text-6xl md:text-5xl lg:text-6xl'>Hi, I'm Hallam. Welcome to my portfolio.</h1>
                <TextGenerateEffect
                    words='Crafting beautiful user interfaces. Bespoke to you.'
                    className="text-center md:text-5xl lg:text-6xl italic font-light"
                />
                
            </div>
            {/*<Button
                borderRadius="1.75rem"
                className="bg-black dark:bg-black text-white dark:text-white border-gray-600 dark:border-gray-600"
                >
                <Link href='/about' scroll={true}>
                    <SlArrowDown />
                </Link>     
            </Button>*/}


        </div>
    </div>
  )
}

export default Hero;


