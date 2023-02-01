import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
