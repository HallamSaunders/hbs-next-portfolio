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
import { FlipWords } from './ui/flip-words';

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
                fill="#93C5FD"
                />
                <Spotlight
                className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen"
                fill="#93C5FD"
                />
                <Spotlight
                className="-top-1000 -right-1000 md:-right-32 md:-top-20 h-screen"
                fill="#93C5FD"
                />
            </div>
            <div className='mb-12'>
                <h1 className='text-center text-white text-6xl md:text-5xl lg:text-6xl'>Hi, I'm Hallam. Welcome to my portfolio.</h1>
                <div className='flex flex-row justify-center mt-8'>
                    <h2 className='text-center text-white text-2xl italic font-light'>Creating</h2>
                    <FlipWords words={['beautiful', 'bespoke', 'modern', 'unique']}
                        duration={1500}
                        className='text-center text-white text-2xl italic font-light'/>
                    <h2 className='text-center text-white text-2xl italic font-light'> websites, whatever your need.</h2>
                </div>
                {/*<TextGenerateEffect  
                    words='Crafting beautiful user interfaces. Bespoke to you.'
                    className="text-center md:text-5xl lg:text-6xl italic font-light"
                />*/}
            </div>
        </div>
    </div>
  )
}

export default Hero;


