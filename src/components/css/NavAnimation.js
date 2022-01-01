import { useState } from 'react';
import classNames from 'classnames/bind';
import {
  FiHome,
  FiFilm,
  FiMusic,
  FiUser,
  FiMessageCircle,
} from 'react-icons/fi';

import styles from './NavAnimaiton.module.scss';

const cx = classNames.bind(styles);

function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftValues = [1, 3, 5, 7, 9];

  const nav = [
    {
      title: 'Home',
      icon: <FiHome />,
    },
    {
      title: 'Movie',
      icon: <FiFilm />,
    },
    {
      title: 'Music',
      icon: <FiMusic />,
    },
    {
      title: 'User',
      icon: <FiUser />,
    },
    {
      title: 'Message',
      icon: <FiMessageCircle />,
    },
  ];

  const handleActiveIndex = (num) => {
    setActiveIndex(num);
  };
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <ul>
          {nav.map((item, index) => {
            return (
              <li
                className={cx({ on: activeIndex === index })}
                onClick={() => handleActiveIndex(index)}
                key={index}
              >
                <span className={cx('icon')}>{item.icon}</span>
                <p className={cx('title')}>{item.title}</p>
                {index === nav.length - 1 ? (
                  <div
                    style={{
                      left: `${leftValues[activeIndex] * 10}%`,
                    }}
                    className={cx('panel')}
                  />
                ) : (
                  ''
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
