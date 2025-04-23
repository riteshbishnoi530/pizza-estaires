"use client";
import React from 'react'
import Image from 'next/image'
import { PRODUCT_LIST } from '@/utils/helper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowIcon } from '@/utils/icons';

function Products() {
    return (
        <div className='max-w-[1685px] w-full gap-16 mx-auto flex max-[1600px]:flex-col justify-center py-[120px]'>
            <div className='max-w-[966px] relative w-full mx-auto rounded-[30px] bg-white shadow-[0px_20px_60px_0px_#00000040] py-11 px-10'>
                <p className='max-w-[729px] mx-auto text-center text-5xl max-lg:text-[32px] font-medium leading-[130%]'>Nos incontournables du moment 🔥</p>
                <p className='max-w-[729px] mx-auto mb-[46px] text-center text-2xl max-lg:text-sm leading-[140%] mt-[15px]'>Découvrez les plats préférés de nos clients ! Des recettes savoureuses et incontournables, testées et approuvées.</p>
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={24}
                    navigation={{
                        nextEl: ".next-arrow",
                        prevEl: ".prev-arrow",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                    }}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        1024: { slidesPerView: 2.2 },
                        320: { slidesPerView: 1.2 },

                    }}
                    className="mx-auto overflow-hidden latest-swiper mySwiper" >
                    {PRODUCT_LIST.map((item, index) => (
                        <SwiperSlide className='overflow-hidden' key={index}>

                            <Image className='mx-auto' src={item} alt='slide' width={410} height={433} />
                            <div className='max-w-[453px] mx-auto'>
                                <div className='flex justify-between mt-5'>
                                    <p className='text-2xl max-sm:text-xl font-semibold'>4 Fromages</p>
                                    <p className='text-2xl max-sm:text-xl font-semibold'>12.99€</p>
                                </div>
                                <p className='mt-[15px]'>Mozzarella, cheddar, emmental & bleu sur une pâte croustillante.</p>
                            </div>
                            <button className='cursor-pointer hover:scale-110 transition-all duration-300 ease-linear bg-[#FC8001] mt-[15px] max-w-[435px] text-white text-xl max-sm:text-base mx-auto flex justify-center font-semibold py-5 rounded-[17px] w-full'>Order Now</button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="prev-arrow max-md:hidden absolute bg-white px-3 py-5 shadow-[0px_10px_20px_0px_#0000001A] rounded-[30px] left-0 top-[50%] cursor-pointer hover:-translate-x-1.5 duration-300 ease-linear">
                    <ArrowIcon/>
                </div>
                <div className="next-arrow max-md:hidden absolute bg-white px-3 py-5 shadow-[0px_10px_20px_0px_#0000001A] rounded-[30px] right-0 top-[50%] rotate-180 cursor-pointer hover:translate-x-1.5 duration-300 ease-linear">
                <ArrowIcon/>
                </div>
            </div>
            <div className='max-w-[655px] w-full mx-auto rounded-[30px] bg-white shadow-[0px_20px_60px_0px_#00000040] py-11 px-10'>
                <p className='text-center text-5xl max-lg:text-[32px] font-medium leading-[130%]'>La nouveauté à ne pas manquer ⭐ </p>
                <p className='text-center text-2xl max-lg:text-sm leading-[140%] mt-[15px]'>Nouveauté du mois ! Un plat à découvrir
                    absolument. Laissez-vous tenter !</p>
                <Image src="/assets/images/fromages.webp" className='mx-auto mt-[46px] max-w-[453px] max-h-[433px] w-full' alt="pizza" width={453} height={433} />
                <div className='max-w-[453px] mx-auto'>
                    <div className='flex justify-between mt-5'>
                        <p className='text-2xl max-sm:text-xl font-semibold'>4 Fromages</p>
                        <p className='text-2xl max-sm:text-xl font-semibold mr-11'>12.99€</p>
                    </div>
                    <p className='mt-[15px]'>Mozzarella, cheddar, emmental & bleu sur une pâte croustillante.</p>
                </div>
                <button className='cursor-pointer hover:scale-110 transition-all duration-300 ease-linear bg-[#FC8001] mt-[15px] max-w-[435px] text-white text-xl max-sm:text-base mx-auto flex justify-center font-semibold py-5 rounded-[17px] w-full'>Order Now</button>
            </div>

        </div>
    )
}

export default Products