import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>
        Not javaScript <br /> <span>just</span> use <span>CSS3</span> <br />
        for <span>simple</span>
      </h1>
    </div>
  );
}

export default Home;
