import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container mb-20 pt-16">
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo.svg"
          alt=""
          className="mx-auto my-16 h-auto w-auto "
        />

        <h3 className="">A history of everything you copy</h3>

        <p className="">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* <!-- Button Container --> */}
        <div className="button-container mt-10">
          <a
            href="#"
            className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
