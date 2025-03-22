'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from "../../public/images/viettel-cx-logo.png"
import { sarabun } from '@/lib/font'
import { Separator } from './ui/separator'
import { Globe, Search } from 'lucide-react';
import { dataLink } from '@/lib/define-data';
import { usePathname } from 'next/navigation';
import { HiOutlineBars3 } from "react-icons/hi2";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`
    flex items-center justify-between max-w-[100dvw] md:max-w-[1120px] min-h-[60px] md:mx-auto fixed top-0 left-0 right-0 z-100 bg-white px-4 transition-all duration-300
    ${isScrolled ? 'mt-0 sm:mt-2 sm:rounded-sm shadow-md' : 'mt-0 sm:mt-7'}
    `}>
      <Link href='/'>
        <Image src={logo} alt='Viettel CX' priority width={109} />
      </Link>
      {/* destop */}
      <nav className='md:flex items-center gap-8 hidden'>
        <ul className='flex items-center gap-4'>
          {
            dataLink.map(({ href, label }) => (
              <li key={`${href}${label}`} className='hover:text-[#ED1B36] text-black transition-colors duration-300 ease-in-out'>
                <Link href={href} className={`${sarabun.className} text-[16px] font-semibold uppercase p-3 ${pathname === href ? 'text-[#ED1B36]' : ''}`}>
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>

        <Separator orientation='vertical' className='h-[1.25em] bg-[#ccc]' />

        <ul className='flex items-center gap-7'>
          <li>
            <Search size={18} />
          </li>
          <li>
            <Globe size={18} />
          </li>
        </ul>
      </nav>
      {/* mobile */}
      <div className='md:hidden block items-center'>
        <HiOutlineBars3 
          className='text-[30px] cursor-pointer' 
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu Popup */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {isMenuOpen && (
        // <div className='fixed inset-0  z-[101]'>
          <div className='fixed top-0 right-0 h-full bg-white z-[102] w-[500px] max-w-[70%] shadow-xl'>
          <div className='flex justify-between items-center p-4'>
            <Link href='/' onClick={() => setIsMenuOpen(false)}>
              <Image src={logo} alt='Viettel CX' priority width={109} />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className='text-2xl'
            >
              ✕
            </button>
          </div>
          
          <div className='px-4'>
            <ul className='flex flex-col gap-4'>
              {dataLink.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <Link 
                    href={href} 
                    className={`${sarabun.className} font-semibold uppercase block py-2 ${
                      pathname === href ? 'text-[#ED1B36]' : 'text-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-6 mt-6'>
              <Search size={18} />
              <Globe size={18} />
            </div>
          </div>
          </div>
        // </div>
      )}
    </header>
  )
}

export default Header