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
    <div className='max-w-[1120px] mx-auto py-8'>
      <ul className='flex flex-wrap gap-2'>
        {items.map(({ href, label }) => (
          <li key={`${href}${label}`} className={`${roboto.className} text-sm text-[#858585] hover:text-black font-medium transition-colors duration-300 ease-in-out hover:border-black border-[#858585] border-solid border px-3 py-2 uppercase`}>
            <Link
              href={href}
              className=""
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