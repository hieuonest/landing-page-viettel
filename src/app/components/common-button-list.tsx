import { roboto } from '@/lib/font'
import Link from 'next/link'
import React from 'react'

function CommonButtonList({
  items = []
}: {
  items: Array<{
    href: string,
    label: string,
  }>
}) {
  return (
    <div className=''>
      <ul className='flex gap-2'>
        {items.map(({ href, label }) => (
          <li key={`${href}${label}`} className={`${roboto.className} text-sm text-[#858585] hover:text-black font-medium transition-colors duration-300 ease-in-out hover:border-black border-[#858585] border-solid border px-3 py-2 uppercase cursor-pointer rounded-full  h-fit`}>
            <Link
              href={href}
              scroll={false}
              className="whitespace-nowrap"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommonButtonList