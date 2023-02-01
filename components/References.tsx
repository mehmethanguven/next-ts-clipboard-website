import Image from 'next/image'

const References = () => {
  return (
    <section id="references">
      <div className="section-container my-40 flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0">
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo-google.png"
          alt=""
          className="w-40"
        />
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo-ibm.png"
          alt=""
          className="w-40"
        />
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo-microsoft.png"
          alt=""
          className="w-40"
        />
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo-hp.png"
          alt=""
          className="w-40 "
        />
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/logo-vector-graphics.png"
          alt=""
          className="w-40 "
        />
      </div>
    </section>
  )
}

export default References
