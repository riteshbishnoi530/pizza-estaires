"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowIcon, QuotesIcon, StarIcon } from "@/utils/icons";

const AvisClients = () => {
    return (
        <div className="pb-[88px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6">
            <div className="max-w-[1439px] mx-auto w-full flex items-center justify-between pb-[45px] max-lg:pb-16 max-md:pb-10 max-sm:pb-6 max-xl:px-4">
                <h2 className="text-5xl max-sm:text-[32px] max-sm:text-center">Avis Clients</h2>
                <div className="max-sm:hidden flex items-center gap-14 max-md:gap-10">
                    <div className="prev-arrow bg-white px-3 py-5 shadow-[0px_10px_20px_0px_#0000001A] rounded-[30px] cursor-pointer hover:-translate-x-1.5 duration-300 ease-linear">
                        <ArrowIcon />
                    </div>
                    <div className="next-arrow bg-white px-3 py-5 shadow-[0px_10px_20px_0px_#0000001A] rounded-[30px] rotate-180 cursor-pointer hover:translate-x-1.5 duration-300 ease-linear">
                        <ArrowIcon />
                    </div>
                </div>
            </div>
            <div className="px-4 relative">
                <Swiper
                    slidesPerView={3}
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
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="max-w-[1439px] mx-auto overflow-hidden latest-swiper mySwiper"
                >
                    {[...Array(4)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white py-5 px-[30px] flex flex-col gap-3 rounded-[20px] shadow-[0px_10px_50px_0px_#00000026]">
                                <QuotesIcon />
                                <StarIcon />
                                <p className="text-[22px] font-semibold leading-[140%]">La meilleure pizza de la ville !</p>
                                <p className="text-lg leading-[140%]">
                                    J’ai commandé chez Pizza Estaires pour la première fois et j’ai été bluffé ! La pâte était parfaitement croustillante,
                                    les ingrédients frais et la livraison ultra rapide. Mon nouveau pizzeria préféré !
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-pagination !-bottom-5 sm:hidden text-center w-full flex gap-3 justify-center" />
            </div>
        </div>
    );
};

export default AvisClients;
