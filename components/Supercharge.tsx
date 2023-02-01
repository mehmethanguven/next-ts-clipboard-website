import { IListItem } from 'types'
import SuperchargeItem from './SuperchargeItem'

const items: IListItem[] = [
  {
    title: 'Create Blacklists',
    desc: ' Easily search your snippets by content, category, web address, application, and more.',
    imageUrl: '/images/icon-blacklist.svg',
  },
  {
    title: 'Plain Text Snippets',
    desc: ' Remove unwanted formatting from copied text for a consistent look.',
    imageUrl: '/images/icon-text.svg',
  },
  {
    title: 'Sneak Preview',
    desc: ' Quick preview of all snippets on your Clipboard for easy access.',
    imageUrl: '/images/icon-preview.svg',
  },
]

const Supercharge = () => {
  return (
    <section id="supercharge">
      <div className="section-container mb-20 pt-16">
        <h3>Supercharge your workflow</h3>
        <p className="section-content mb-16 text-xl">
          We&apos;ve got the tools to boost your productivity.
        </p>
        {/* <!-- Items Container --> */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {/* <!-- Item 1 --> */}
          {(items || []).map((item, id) => (
            <SuperchargeItem key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Supercharge
