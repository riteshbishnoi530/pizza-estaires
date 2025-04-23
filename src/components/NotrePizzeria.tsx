import { NOTRE_PIZZERIA_CARDS } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function NotrePizzeria() {
  return (
    <div className='px-4 max-xl:pb-[60px]'>
      <h2 className='text-5xl max-sm:text-[32px] mb-10 font-medium leading-[130%] max-w-[580px] mx-auto text-center'>Pourquoi choisir notre pizzeria ?</h2>
      <div className='max-w-[1439px] relative mx-auto flex flex-col items-center justify-center'>
        <div className='border-2 border-dashed border-[#AAAAAA] p-[4px_64px_91px_49px] max-sm:p-[20px] rounded-full'>
          <Image className='' src="/assets/images/pourquio-chooisir.webp" alt='pizza' width={675} height={701} />
        </div>
        <div className='flex flex-wrap gap-5 max-xl:mt-10 justify-center items-center'>
          {NOTRE_PIZZERIA_CARDS.map((item, index) => (
            <div className={`xl:absolute max-w-[480px] p-[30px] bg-white rounded-[15px] shadow-[0px_40px_80px_0px_#0000001F] ${index === 0 ? "left-0 top-0" : index === 1 ? "top-0 right-0" : index == 2 ? "bottom-20 left-0" : "bottom-20 right-0"}`} key={index}>
              <div className='flex items-center gap-[15px]'>
                <div>{item.icon()}</div>
                <h3 className={`text-2xl max-sm:text-xl font-medium leading-[130%] ${index === 0 ? "max-w-[217px]" : index === 1 ? "max-w-[269px]" : index === 2 ? "max-w-[162px]" : ""}`}>{item.heading}</h3>
              </div>
              <p className='text-xl max-sm:text-base leading-[140%] mt-[10px]'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotrePizzeria