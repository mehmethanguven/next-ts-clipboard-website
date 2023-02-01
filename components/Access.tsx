import Image from 'next/image'

const Access = () => {
  return (
    <section id="access">
      <div className="section-container">
        <h3>Access Clipboard anywhere</h3>
        <p className="mx-auto mb-24 max-w-md text-xl text-grayishBlue">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/image-devices.png"
          alt=""
          className="mx-auto h-auto w-auto"
        />
      </div>
    </section>
  )
}
export default Access
