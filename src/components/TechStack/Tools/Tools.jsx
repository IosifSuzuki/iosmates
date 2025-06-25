import './Tools.css';

import { useTheme } from './../../../provider/theme/theme';
import Item from './Item/Item';
import HScroll from './../../HScroll/HScroll';

export default function Tools(props) {
  const title = props.title;
  const items = props.items;
  const className = props.className ?? '';
  const { theme } = useTheme();

  return (
    <div className=''>
      <div className='tools'>
        <div className='content bg-overlay flex flex-col items-center gap-5 p-2 md:p-8'>
          <h3 className='text-center text-title font-bold text-xl'>{title}</h3>
          <HScroll
            items={items.map((item, idx) => {
              let iconURL = item.iconURL;
              if (!iconURL) {
                switch (theme) {
                  case 'dark':
                    iconURL = item.icon.bright;
                    break;
                  case 'bright':
                    iconURL = item.icon.dark;
                }
              }
              return (
                <Item
                  className='flex-shrink-0 w-24 md:w-32 scroll-snap-align-start'
                  key={idx}
                  iconURL={iconURL}
                  title={item.title}
                />
              );
            })}
          />
        </div>
      </div>
    </div>
  );
}
