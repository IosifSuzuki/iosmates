import './NavList.css';

import Item from './../Item/Item';
import { ItemStyles } from './../Item';
import ButtonItem from './../ButtonItem/ButtonItem';

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
          className =
            'hover:text-dark-highlight transition-colors duration-300';
          textClassName = 'item-underline';
        }
        return (
          <Item
            onClick={onClick}
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
            onClick={onClick}
            key={idx}
            title={item.title}
            path={item.path}
          />
        );
    }
  });

  return <ul className={className}>{itemJSXs}</ul>;
}
