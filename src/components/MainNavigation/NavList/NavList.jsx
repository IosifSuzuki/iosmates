import './NavList.css';

import Item from './../Item/Item';
import { ItemStyles } from './../Item';
import ButtonItem from './../ButtonItem/ButtonItem';
import IconItem from './../IconItem/IconItem';

export default function NavList(props) {
  const items = props.items;
  const extraClassName = props.className || '';
  const isMobile = props.isMobile || false;
  const onClick = props.onClick;
  let className = '';
  className = [
    ...new Set([...className.split(/\s+/), ...extraClassName.split(/\s+/)]),
  ]
    .filter(Boolean)
    .join(' ');

  const itemJSXs = items.map((item, idx) => {
    switch (item.style) {
      case ItemStyles.PLAIN:
        let textClassName = '';
        let className = '';
        if (!isMobile) {
          className = 'hover:text-highlight transition-colors duration-300';
          textClassName = 'item-underline';
        }
        return (
          <Item
            onClick={onClick.bind(undefined, item.tag)}
            key={idx}
            title={item.title}
            path={item.path}
            className={className}
            textClassName={textClassName}
          />
        );
      case ItemStyles.FILL:
        return (
          <ButtonItem
            onClick={onClick.bind(undefined, item.tag)}
            key={idx}
            title={item.title}
            path={item.path}
          />
        );
      case ItemStyles.ICON:
        return (
          <IconItem
            icon={item.icon}
            title={item.title}
            key={idx}
            onClick={onClick.bind(undefined, item.tag)}
          />
        );
    }
  });

  return <ul className={className}>{itemJSXs}</ul>;
}
