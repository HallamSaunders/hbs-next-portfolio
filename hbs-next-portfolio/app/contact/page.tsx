import React from 'react'

//Import UI components
import { HoverEffect } from '@/components/ui/card-hover-effect';

//Fonts
import { Playfair_Display } from 'next/font/google';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: 'variable'
})

const email: string = 'hallambsaunders@gmail.com';

const page = () => {
  return (
    <main className="h-screen bg-black flex justify-center items-center sm:px-10 px-5">
      <div className={playfair.className}>
        {/*<div className='bg-black ml-96 mr-96 flex flex-col justify-center items-center'>
          <div className='flex flex-row items-center justify-between border-red-500 border-2'>
            <div className='ml-1  border-green-500 border-2 self-start'>
              <HoverEffect items={emailContact} className='self-start w-64'/>
            </div>
            <div className='mr-1 border-yellow-500 border-2'>
              <TextGenerateEffect words={'hallambsaunders@gmail.com'} />
            </div>
          </div>
          <div className='flex flex-row justify-between items-center border-red-500 border-2'>
            <TextGenerateEffect words={'in/hallam-saunders'} />
            <HoverEffect items={linkedin} className='w-full'/>
          </div>
          <div className='flex flex-row justify-between items-center border-red-500 border-2'>
            <HoverEffect items={instagram} className='w-full'/>
            <TextGenerateEffect words={'@hallam_bright'} />
          </div>
        </div>*/}
        <div className='bg-black ml-96 mr-96'>
          <div className='flex flex-row justify-between items-center'>
            <HoverEffect items={emailContact} className='w-96 mr-96'/>
            <TextGenerateEffect words={'hallambsaunders@gmail.com'} className='mr-1'/>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <TextGenerateEffect words={'in/hallam-saunders'} className='ml-1'/>
            <HoverEffect items={linkedin} className='w-96'/>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <HoverEffect items={instagram} className='w-96'/>
            <TextGenerateEffect words={'@hallam_bright'} className='mr-1'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page

export const emailContact = [
  {
    title: "Email",
    description:
      "Send me an email to discuss ideas for your website, together we'll bring them to life.",
    link: 'hallambsaunders@gmail.com',
  },
];
export const linkedin = [
  {
    title: "LinkedIn",
    description:
      "Join my network to keep up with my career.",
    link: "https://www.linkedin.com/in/hallam-saunders/",
  },
];
export const instagram = [
  {
    title: "Instagram",
    description:
      "Follow for updates, advice, and other content!",
    link: "https://www.instagram.com/hallam_bright/",
  },
];