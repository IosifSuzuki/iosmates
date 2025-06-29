export const ItemStyles = {
  PLAIN: 'plain',
  FILL: 'fill',
  ICON: 'icon',
};

export const ItemTag = {
  SERVICES: 'services',
  ABOUT_US: 'about_us',
  WORKS: 'works',
  CONTACT_US: 'contact_us',
  THEME: 'theme',
};

export function items(isMobile, themeIcon, themeTitle, themeTooltip) {
  return [
    {
      title: 'Services',
      path: '/#services',
      tag: ItemTag.SERVICES,
      style: ItemStyles.PLAIN,
    },
    {
      title: 'About us',
      path: '/about_us',
      tag: ItemTag.ABOUT_US,
      style: ItemStyles.PLAIN,
    },
    {
      title: 'Our work',
      path: '/works',
      tag: ItemTag.WORKS,
      style: ItemStyles.PLAIN,
    },
    {
      title: "Let's talk",
      path: '/#contact_form',
      tag: ItemTag.CONTACT_US,
      style: isMobile ? ItemStyles.PLAIN : ItemStyles.FILL,
    },
    {
      title: themeTitle,
      path: null,
      icon: themeIcon,
      tag: ItemTag.THEME,
      tooltip: themeTooltip,
      style: ItemStyles.ICON,
    },
  ];
}
