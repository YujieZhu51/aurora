import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
    links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};
  

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `
    © 2026 Aurora US Consulting. All rights reserved.
  `,
};
