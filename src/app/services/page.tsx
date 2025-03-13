import { roboto } from '@/lib/font'
import React, { lazy } from 'react'
import CommonHeading from '../components/common-heading'
import servicesHero from "../../../public/images/services-page-hero.png"
import CommonButtonList from '../components/common-button-list'
const items = [
  {
    href: 'Outsourcing Contact center',
    label: 'Outsourcing Contact center'
  },
  {
    href: 'BPO',
    label: 'BPO'
  },
  {
    href: 'UPSALE',
    label: 'UPSALE'
  },
  {
    href: 'LOYATY',
    label: 'LOYATY'
  },
  {
    href: 'VOICE OF CUSTOMER',
    label: 'VOICE OF CUSTOMER'
  },
  {
    href: 'CUSTOMER EXPRIENCE',
    label: 'CUSTOMER EXPRIENCE'
  },
  {
    href: 'BẢO HÀNH',
    label: 'BẢO HÀNH'
  }
]

function Services() {
  return (
    <div>
      <main className="bg-white">
        <CommonHeading
          title={
            <span>
              Hệ sinh thái <br /> Dịch vụ của chúng tôi
            </span>
          }
          image={servicesHero}
          imageAlt="Services Hero"
          heroContent={
            <h2
              className={`${roboto.className} text-3xl font-light max-w-[365px] text-white`}
            >
              Bạn có chắc mình đã kết nối với khách hàng trên mọi điểm chạm?
            </h2>
          }
          paddingBottomTitle='50px'
        />

        <section>
          <CommonButtonList items={items} />
        </section>
      </main>
    </div>
  )
}

export default Services