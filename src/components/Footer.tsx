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
                        <Image src="/assets/images/logo.webp" alt="footer" width={124} height={116} />
                        <p className='text-xl lg:hidden'>Pizza Estaires:<Link className='text-lg' href="/">Adresse, téléphone, VAT, SIREN</Link></p>
                    </div>
                    <div className='xl:ml-[120px] flex-wrap flex gap-[91px] max-sm:gap-x-6 max-sm:gap-y-[30px] '>
                        <div>
                            <p className='text-2xl font-semibold'>Livraison</p>
                            <div className='flex flex-col gap-5'>
                                {[...Array(3)].map((_, i) => (
                                    <Link href="/" key={i} className='text-lg' >59 000 Estaires</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold'>Livraison</p>
                            <div className='flex flex-col gap-5'>
                                {[...Array(3)].map((_, i) => (
                                    <Link href="/" key={i} className='text-lg' >59 000 Estaires</Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold'>Recrutement</p>
                            <div className='flex flex-col gap-5'>
                                <Link href="/" className='text-lg' >Offer 1</Link>
                                <Link href="/" className='text-lg' >Offer 2</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-[91px] max-lg:mt-[30px] max-lg:mr-[91px]'>
                    <p className='text-2xl font-semibold max-lg:hidden'>Réseaux Sociaux</p>
                    <div className='flex gap-[10px]'>
                        <Link href=""><Facebook /></Link>
                        <Link href=""><Instagram /></Link>
                        <Link href=""><Tiktok /></Link>
                        <Link href=""><Google /></Link>
                        <Link href=""><Wechat /></Link>
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