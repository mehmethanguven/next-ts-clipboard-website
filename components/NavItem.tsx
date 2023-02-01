import React from 'react'
import { INavLink } from 'types'

const NavItem = ({ title, url }: INavLink) => {
  return (
    <div className="flex flex-col space-y-4 text-center md:text-left">
      <div>
        <a href={url} className="hover:text-strongCyan">
          {title}
        </a>
      </div>
    </div>
  )
}

export default NavItem
