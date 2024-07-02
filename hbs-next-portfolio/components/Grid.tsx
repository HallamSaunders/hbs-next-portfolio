"use client";

import React from 'react'
import { cn } from '@/utils/cn';
import Link from 'next/link';

//UI components
import { TbAddressBook, TbArrowUpRight, TbBallpen, TbBook2, TbBrandReact, TbBrandUnity, TbBrandVscode, TbBriefcase, TbMail, TbPaperclip, TbSchool } from 'react-icons/tb'
import { Vortex } from './ui/vortex';

//Fonts
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: 'variable'
})

//Grab links in order so they can be called by id
const links: string[] = ['/projects', '/experience', '/contact'];

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
                link={links[i]}
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
    description: "Take a look through some of my projects.",
    header: <div className='flex flex-row text-blue-300/50 justify-center align-middle'>
        <TbBrandVscode size={46}/> <TbBrandReact size={46}/> <TbBrandUnity size={46}/></div>,
  },
  {
    title: "Background",
    description: "More about me: my eduaction and experiece.",
    header: <div className='flex flex-row text-blue-300/50 justify-center align-middle'>
        <TbSchool size={46}/> <TbBriefcase size={46}/> <TbBook2 size={46}/></div>,
  },
  {
    title: "Get in touch!",
    description: "A website perfect for you, made by me.",
    header: <div className='flex flex-row text-blue-300/50 justify-center align-middle'>
        <TbMail size={46}/> <TbPaperclip size={46}/> <TbAddressBook size={46}/></div>,
  },
];

const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div>
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                    className,
                )}
            >
            {children}
            </div>
        </div>
    );
};
  
const BentoGridItem = ({
    className,
    title,
    description,
    header,
    link,
} : {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    link: string;
}) => {
    return (
        <div>
            <Link href={link}>
                <div
                    className={cn(
                        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                        className,
                    )}
                >
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                        <div className='flex flex-row'>
                            {title}
                            <TbArrowUpRight className='ml-2 mt-1' size={20}/>
                        </div>
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {description}
                    </div>
                </div>
                </div>  
            </Link>
        </div>
    );
};