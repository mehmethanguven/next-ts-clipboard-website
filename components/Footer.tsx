import { footerNavLinks, socialLinks } from 'data/data'
import Image from 'next/image'
import NavItem from './NavItem'
import SocialItem from './SocialItem'

const Footer = () => {
  return (
    <footer className="mt-10 bg-slate-900 shadow-lg">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* <!-- Image --> */}
          <Image
            width={0}
            height={0}
            sizes="100vh"
            src="/images/logo.svg"
            alt=""
            className="h-auto w-auto scale-50 "
          />
          {/* <!-- Container for Menus & Social --> */}
          <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* <!-- Menus --> */}
            <div className="grid max-w-lg grid-cols-1 space-y-4 md:ml-24 md:grid-cols-3 md:gap-x-24 md:space-y-0">
              {/* <!-- Menu 1 --> */}
              {(footerNavLinks || []).map((item, id) => (
                <div key={id}>
                  <NavItem {...item} />
                </div>
              ))}
            </div>

            {/* <!-- Social Icons --> */}
            <div className="flex w-32 justify-between py-1">
              {(socialLinks || []).map((item, id) => (
                <SocialItem key={id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
