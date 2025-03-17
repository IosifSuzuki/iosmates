export const ItemStyles = {
  PLAIN: 'plain',
  FILL: 'fill',
};

export function items(isMobile) {
  return [
    {
      title: 'Services',
      path: '/iosmates/#services',
      style: ItemStyles.PLAIN,
    },
    {
      title: 'About us',
      path: '/iosmates/#footer',
      style: ItemStyles.PLAIN,
    },
    {
      title: 'Our work',
      path: '/iosmates/#',
      style: ItemStyles.PLAIN,
    },
    {
      title: "Let's talk",
      path: '/iosmates/#contact_form',
      style: isMobile ? ItemStyles.PLAIN : ItemStyles.FILL,
    },
  ];
}
