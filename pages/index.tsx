import Access from '@/components/Access'
import Bottom from '@/components/Bottom'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import References from '@/components/References'
import Snippets from '@/components/Snippets'
import Supercharge from '@/components/supercharge/Supercharge'

export default function Home() {
  return (
    <div>
      {/* Hero section */}

      <Hero />
      {/* // <!-- Snippets Section --> */}
      <Snippets />
      {/* // <!-- Features Section --> */}
      <Features />
      {/* // <!-- Access Anywhere Section --> */}
      <Access />
      {/* // <!-- Supercharge Section --> */}
      <Supercharge />
      {/* // <!-- References Section --> */}
      <References />
      {/* // <!-- Bottom CTA Section --> */}
      <Bottom />
    </div>
    // <!-- Hero Section -->
  )
}
