export const ItemStyles = {
  PLAIN: 'plain',
  FILL: 'fill',
};

export function items(isMobile) {
  return [
    {
      title: 'Services',
      path: '#services',
      style: ItemStyles.PLAIN,
    },
    {
      title: 'About us',
      path: '#footer',
      style: ItemStyles.PLAIN,
    },
    {
      title: 'Our work',
      path: '/',
      style: ItemStyles.PLAIN,
    },
    {
      title: "Let's talk",
      path: '#contact_form',
      style: isMobile ? ItemStyles.PLAIN : ItemStyles.FILL,
    },
  ];
}
