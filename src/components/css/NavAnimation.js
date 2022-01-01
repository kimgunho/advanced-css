import classNames from 'classnames/bind';

import styles from './NavAnimaiton.module.scss';

const cx = classNames.bind(styles);

function BorderAnimation() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <div className={cx('box')}></div>
        <div className={cx('box')}></div>
        <p className={cx('mouse')}>D</p>
      </div>
    </div>
  );
}

export default BorderAnimation;
