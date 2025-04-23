import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { PIZZA_TYPES_LIST } from '@/utils/helper'

function Pizzatypes() {
    return (
        <div className='relative py-[58px] max-lg:py-[25] overflow-hidden bg-white'>
            <Image src="/assets/images/pizza-types-layer.webp" alt="pizza" width={602} height={384} className='w-full max-w-[602px] absolute -left-30 top-0 z-2 max-lg:hidden' />
            <Marquee>
                <div className='flex gap-10'>
                    {PIZZA_TYPES_LIST.map((item, index) => (
                        <div key={index} className={`flex items-center gap-[30px] py-[30px] max-lg:p-3 w-full rounded-[30px] max-lg:rounded-2xl pl-5 pr-2 ${index === 0 ? "bg-[#FFEEDE] max-w-[541px]" : index === 1 ? "bg-[#E9F5FF] max-w-[560px]" : index === 2 ? "bg-[#FFE0EA] max-w-[580px]" : index === 3 ? "bg-[#FFEEDE] max-w-[541px]" : index === 4 ? "bg-[#E9F5FF] max-w-[560px]" : "bg-[#FFE0EA] max-w-[580px]"}`}>
                            <Image className='max-lg:max-w-[95px] min-h-[118px]' src={item.image} alt="pizza" width={172} height={172} />
                            <div>
                                <p className='text-2xl max-lg:text-lg font-medium leading-[140%]'>{item.heading}</p>
                                <p className='max-lg:text-sm font-medium leading-[140%]'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default Pizzatypes