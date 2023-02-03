import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  url: string
  close?: () => void
}

const NavItem = ({ title, url, close }: Props) => {
  return (
    <div className="flex flex-col space-y-4 text-center md:text-left">
      <Link
        href={url}
        onClick={close}
        className="hover:text-strongCyan "
        scroll={true}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavItem
