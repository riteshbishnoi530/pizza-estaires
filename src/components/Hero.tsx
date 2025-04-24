import React from 'react'
import CustomButton from './common/CustomButton'
import Image from 'next/image'
import { CallIcon, DeliveryCar, FreeDelivery, FreeIcon } from '@/utils/icons'
import Header from './Header'

function Hero() {
    return (
        <>
            <Header/>
            <div className='max-w-[1439px] pt-[82px] pb-[91px] max-lg:py-[60px] mx-auto px-4'>
                <div className='flex max-xl:flex-col xl:items-center justify-between'>
                    <div>
                        <h1 className='text-[74px] max-lg:text-6xl max-md:text-5xl max-sm:text-[28px] font-semibold max-w-[546px] max-xl:max-w-[780px] leading-[130%]'>Commandez, Savourez,
                            Régalez-Vous</h1>
                        <p className='text-[40px] max-lg:text-4xl max-md:text-2xl max-sm:text-base my-[30px] text-black/70 max-w-[445px]'>– en un clic, sans
                            bouger de chez vous !</p>
                        <CustomButton text='Commander maintenant' buttonClass='max-xl:hidden cursor-pointer hover:scale-95 transition-all duration-300 ease-linear bg-[#FF7F00] py-[24px] px-[30px] text-xl rounded-[100px] text-white font-bold' />
                    </div>
                    <div className='max-sm:hidden relative max-xl:max-w-[800px] max-xl:mx-auto'>
                        <Image className='max-sm:max-w-[234px]' src="/assets/images/pizza.webp" alt="pizza" width={640} height={640} />
                        <div className='absolute top-10 -left-50 max-2xl:left-0 flex gap-[13px] bg-white p-[26px] max-md:p-4 rounded-[13px] shadow-[0px_26px_52px_0px_#0000001] w-fit'>
                            <div className='free-icon'>
                                <FreeIcon />
                            </div>
                            <p className='max-w-[200px] max-md:max-w-[150px] text-[31px] max-md:text-xl font-medium leading-[130%]'>2 pizzas th Purchased the 3th FREE*</p>
                        </div>
                        <div className='absolute -left-50 max-2xl:left-0 bottom-30 flex gap-[13px] rounded-[10px] p-[23px] max-md:p-4 bg-white shadow-[0px_26px_52px_0px_#0000001] w-fit'>
                            <div className='free-delivery'>
                                <FreeDelivery />
                            </div>
                            <p className='max-w-[186px] text-xl max-md:text-lg font-medium leading-[130%]'>FREE HOME & OFFICE DELIVERY **</p>
                        </div>
                        <div className='absolute right-0 top-0 flex gap-[13px] items-center rounded-[10px] p-[23px] max-md:p-4 bg-white shadow-[0px_26px_52px_0px_#0000001] w-fit'>
                            <div className='call-icon'>
                                <CallIcon />
                            </div>
                            <p className='max-w-[186px] text-xl max-md:text-lg font-medium leading-[130%] max-sm:hidden'>03 28 43 86 24</p>
                        </div>
                        <div className='absolute right-0 -bottom-20 max-2xl:bottom-2 flex items-center gap-[10px] bg-white shadow-[0px_20px_40px_0px #0000001F] p-5 max-md:p-3 rounded-[10px]'>
                            <div className='delivery-car'>
                                <DeliveryCar />
                            </div>
                            <p className='text-black text-xl max-md:text-lg leading-[130%] max-w-[108px]'>Take away or delivery</p>
                        </div>
                    </div>
                    <Image className='sm:hidden' src="/assets/images/hero-image.webp" alt="hero" width={640} height={640} />
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex gap-[66px] max-2xl:gap-7'>
                        <div className='max-xl:hidden'>
                            <p className='text-sm leading-[140%] max-w-[546px]'>* Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p className='text-sm leading-[140%] max-w-[546px]'>** Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-3'>
                                <div className='w-1 h-[43px] bg-black'></div>
                                <p className='max-w-[450px] text-xl max-xl:mb-5 max-sm:text-base leading-[140%]'>Nous sommes ouverts aujourd’hui le 12 Mars 2025 du 11h à 14h et du 18h à 22h30.</p>
                            </div>
                            <CustomButton text='Commander maintenant' buttonClass='xl:hidden hover:scale-95 cursor-pointer transition-all duration-300 ease-linear bg-[#FF7F00] py-[24px] px-[30px] text-xl max-sm:text-sm max-sm:py-[10px] max-sm:px-5 rounded-[100px] text-white font-bold' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero