import { Facebook, Google, Instagram, Tiktok, Wechat } from '@/utils/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='pt-[73px] pb-10'>
            <div className='max-w-[1439px] xl:justify-between flex max-xl:flex-wrap mx-auto px-4'>
                <div className='flex max-xl:flex-col-reverse'>
                    <div className='flex items-center gap-[33px] max-lg:mt-[30px]'>
                        <Link href="/">
                        <Image src="/assets/images/logo.webp" alt="footer" width={124} height={116} />
                        </Link>
                        <p className='text-xl lg:hidden'>Pizza Estaires:<Link className='text-lg' href="/">Adresse, téléphone, VAT, SIREN</Link></p>
                    </div>
                    <div className='xl:ml-[120px] flex-wrap flex gap-[91px] max-sm:gap-x-6 max-sm:gap-y-[30px] '>
                        <div>
                            <p className='text-2xl font-semibold'>Livraison</p>
                            <div className='flex flex-col gap-5'>
                                {[...Array(3)].map((_, i) => (
                                    <Link href="/" key={i} className='text-lg hover:text-black/70 transition-all duration-300 ease-linear' >59 000 Estaires</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold'>Livraison</p>
                            <div className='flex flex-col gap-5'>
                                {[...Array(3)].map((_, i) => (
                                    <Link href="/" key={i} className='text-lg hover:text-black/70 transition-all duration-300 ease-linear' >59 000 Estaires</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold'>Recrutement</p>
                            <div className='flex flex-col gap-5'>
                                <Link href="/" className='text-lg hover:text-black/70 transition-all duration-300 ease-linear' >Offer 1</Link>
                                <Link href="/" className='text-lg hover:text-black/70 transition-all duration-300 ease-linear' >Offer 2</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-[91px] max-lg:mt-[30px] max-lg:mr-[91px]'>
                    <p className='text-2xl font-semibold max-lg:hidden'>Réseaux Sociaux</p>
                    <div className='flex gap-[10px]'>
                        <Link target='_blank' className='hover:scale-105 transition-all duration-300 ease-linear' href="https://facebook.com"><Facebook /></Link>
                        <Link target='_blank' className='hover:scale-105 transition-all duration-300 ease-linear' href="https://instagram.com"><Instagram /></Link>
                        <Link target='_blank' className='hover:scale-105 transition-all duration-300 ease-linear' href="https://tiktok.com"><Tiktok /></Link>
                        <Link target='_blank' className='hover:scale-105 transition-all duration-300 ease-linear' href="https://google.com"><Google /></Link>
                        <Link target='_blank' className='hover:scale-105 transition-all duration-300 ease-linear' href="https://wechat.com"><Wechat /></Link>
                    </div>
                </div>
            </div>
            <div className='max-w-[1439px] mx-auto mt-25 max-lg:mt-8'>
                <div className='flex justify-between max-lg:justify-center'>
                    <p className='text-xl max-lg:hidden'>Pizza Estaires:<Link className='text-lg' href="/">Adresse, téléphone, VAT, SIREN</Link></p>
                    <div className='flex gap-11 max-sm:gap-8'>
                        <Link className='max-sm:font-medium' href="/">CGU</Link>
                        <Link className='max-sm:font-medium' href="/">Politique de confidentialité</Link>
                        <Link className='max-sm:font-medium' href="/">FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer