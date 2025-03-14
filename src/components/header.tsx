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

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
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
    flex items-center justify-between max-w-[1120px] min-h-[60px] mx-auto fixed top-0 left-0 right-0 z-100 bg-white px-4 transition-all duration-300
    ${isScrolled ? 'mt-2 rounded-sm shadow-md ' : 'mt-7'}
    `}>
      <Link href='/'>
      <Image src={logo} alt='Viettel CX' priority width={109} />
      </Link>
      <nav className='flex items-center gap-8'>
        <ul className='flex items-center gap-4'>
          {
            dataLink.map(({ href, label }) => (
              <li key={`${href}${label}`} className='hover:text-[#ED1B36] text-black transition-colors duration-300 ease-in-out'>
                <Link href={href} className={`${sarabun.className} font-semibold uppercase p-3 ${pathname === href ? 'text-[#ED1B36]' : ''}`}>
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>

        <Separator orientation='vertical' className='h-[1.25em] bg-[#ccc]'/>

        <ul className='flex items-center gap-7'>
          <li>
            <Search size={18}/>
          </li>
          <li>
            <Globe size={18} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header