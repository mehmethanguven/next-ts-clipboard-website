import Image from 'next/image'

const Features = () => {
  return (
    <section id="features">
      <div className="section-container pt-16">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* <!-- Image --> */}
          <div className="md:w-1/2">
            <Image
              width={0}
              height={0}
              sizes="100vh"
              src="/images/image-computer.png"
              alt=""
              className="top-0 right-[50%] h-auto w-auto md:absolute"
            />
          </div>

          {/* <!-- Items Container --> */}
          <div className="mt-16 mb-24 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
            {/* <!-- Item 1 --> */}
            <div>
              <h5>Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* <!-- Item 2 --> */}
            <div>
              <h5>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            {/* <!-- Item 3 --> */}
            <div>
              <h5>Completely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
