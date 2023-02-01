import { headerNavLinks } from 'data/data'
import Image from 'next/image'
import NavItem from './NavItem'

const Header = () => {
  return (
    <header>
      <div className="mx-auto flex flex-col items-center justify-center space-y-4 bg-white shadow-lg md:flex-row md:gap-x-12 md:space-y-0">
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
    </header>
  )
}
export default Header
