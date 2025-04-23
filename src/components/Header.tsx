"use client";
import { HEADER_LIST } from "@/utils/helper";
import { CartIcon, LoginIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => { 
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="flex justify-center items-center py-2.5 max-xl:px-4 shadow-[0px_20px_30px_0px_#00000005] bg-white">
      <div className="max-w-[1440px] max-2xl:max-w-[1140px] mx-auto flex items-center justify-between w-full">
        <Link href="#">
          <Image
            width={124.47}
            height={116.29}
            className="max-xl:w-full max-xl:max-w-[90px] max-md:max-w-16"
            src="/assets/images/logo.webp"
            alt="logo"
          />
        </Link>

        <div className="hidden lg:flex lg:max-w-[520px] w-full lg:justify-between items-center">
          {HEADER_LIST.map((obj, i) => (
            <Link
              href={obj.href}
              key={i}
              className="text-xl font-normal relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-black after:w-0 hover:after:w-full after:duration-300 after:ease-linear"
            >
              {obj.name}
            </Link>
          ))}
        </div>

        <div
          className={`lg:hidden fixed top-0 right-0 w-[100%] h-full bg-black z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <Link
              href={obj.href}
              key={i}
              onClick={() => setOpen(false)}
              className="text-2xl text-white font-normal py-4 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:duration-300 after:ease-linear"
            >
              {obj.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-[22px] items-center max-lg:gap-4 max-md:gap-3">
          <button className="py-3.5 px-[19px] h-[55px] max-xl:px-4 max-xl:py-3 max-md:py-2 max-md:px-3 border border-black rounded-[10px] flex items-center gap-2.5 header-button hover:bg-black hover:text-white duration-300 ease-linear cursor-pointer text-xl font-normal leading-127 max-md:text-base">
            Login <LoginIcon />
          </button>

          <div className="relative">
            <span className="size-[66px] max-2xl:size-14 max-lg:size-10 bg-[#FF7F00] rounded-full border border-transparent hover:border-orange shop-cart-icon flex justify-center items-center shadow-[0px_10px_30px_0px_#84420052] cursor-pointer">
              <CartIcon/>
            </span>
            <span className="size-9 max-2xl:size-8 max-lg:size-5 rounded-xl bg-white flex justify-center items-center text-base font-medium leading-130 absolute -top-1/4 translate-y-1/4 -right-1/4 -translate-x-1/4">
              2
            </span>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="z-[15] flex-col gap-1 lg:hidden flex cursor-pointer"
          >
            <span
              className={`w-10 h-1.5 bg-black duration-300 ease-linear rounded ${open && "rotate-45 translate-y-3 !bg-white"
                }`}
            ></span>
            <span
              className={`w-10 h-1.5 bg-black duration-300 ease-linear rounded ${open && "-translate-x-10 opacity-0 duration-700 !bg-white"
                }`}
            ></span>
            <span
              className={`w-10 h-1.5 bg-black duration-300 ease-linear rounded ${open && "-rotate-45 -translate-y-2 !bg-white"
                }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
