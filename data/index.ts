import { INavLink, ISocialLink } from 'types'

export const headerNavLinks: INavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'Features', url: '#features' },
  { title: 'Access', url: '#access' },
  { title: 'Supercharge', url: '#supercharge' },
  { title: 'Bottom', url: '#bottom' },
  { title: 'About Us', url: 'about' },
]

export const footerNavLinks: INavLink[] = [
  { title: 'FAQ', url: '#' },
  { title: 'Privacy Policy', url: '#' },
  { title: 'Install Guide', url: '#' },
  { title: 'Contact Us', url: '#' },
  { title: 'Press Kit', url: '#' },
]

export const socialLinks: ISocialLink[] = [
  { title: 'facebook', imageUrl: '/images/icon-facebook.svg', url: '#' },
  { title: 'twitter', imageUrl: '/images/icon-twitter.svg', url: '#' },
  { title: 'instagram', imageUrl: '/images/icon-instagram.svg', url: '#' },
]
