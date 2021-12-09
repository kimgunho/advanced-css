import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ gnb }) {
  return (
    <header className={cx('header')}>
      <h1 className={cx('title')}>
        <Link to="/">Advanced CSS3</Link>
      </h1>
      <ol>
        {gnb.map(({ title, link }) => (
          <li key={title}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ol>
    </header>
  );
}

export default Header;
