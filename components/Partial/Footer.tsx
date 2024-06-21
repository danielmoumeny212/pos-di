import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Facebook, Instagram, Twitter} from "lucide-react";

const FooterLink = ({href, children}: {href:string, children:React.ReactNode}) =>{
    return(
        <Link href={href} className='block opacity-70 hover:opacity-50 max-w-fit mb-[10px]'>{children}</Link>
    )
}

const Footer = () => {
  return (
    <footer className='w-full px-4 md:px-8 pt-16'>
        {/* <div className='grid grid-cols-4 gap-4 mb-20'> */}
        <div className='flex flex-wrap justify-between gap-x-6 gap-y-11 mb-20 px-12'>
            <div className=''>
                <Image
                  src='/logo.png'
                  width={240}
                  height={60}
                  alt="logo"
                />                
            </div>
            {/* <div className='flex justify-between w-[800px]'> */}
                <div className='link-container'>
                    <h5 className='col-heading'>Company</h5>
                    <FooterLink href="/">About</FooterLink>
                    <FooterLink href="/">Careers</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>
                </div>
                <div className='link-container'>
                    <h5 className='col-heading'>Contact</h5>
                    <FooterLink href="/">About</FooterLink>
                    <FooterLink href="/">Careers</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>              
                </div>
                <div className='link-container'>
                    <h5 className='col-heading'>More</h5>
                    <FooterLink href="/">About</FooterLink>
                    <FooterLink href="/">Careers jejkbfe</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>
                    <FooterLink href="/">Mobile</FooterLink>
                </div>           
            {/* </div> */}
        </div>
        <hr/>
        <div className='flex justify-between items-center px-4 my-4'>
            <p className='text-lg opacity-60'>All rights reserved</p>
            <div className='flex justify-between items-center w-28'>
                <Facebook className='opacity-60'/>
                <Instagram className='opacity-60'/>
                <Twitter className='opacity-60'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer;