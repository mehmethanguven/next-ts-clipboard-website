import { headerNavLinks } from 'data'
import Image from 'next/image'
import NavItem from './NavItem'

export const DesktopMenu = () => {
  return (
    <div className="mx-auto hidden items-center justify-center bg-white shadow-lg md:flex md:flex-row md:gap-x-12">
      {/* <!-- Menu 1 --> */}
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src="/images/logo.svg"
        alt=""
        className="h-16 w-auto scale-50 "
      />
      {(headerNavLinks || []).map((item, id) => (
        <NavItem key={id} {...item} />
      ))}
    </div>
  )
}
