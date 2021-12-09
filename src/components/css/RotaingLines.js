import classNames from 'classnames/bind';

import styles from './RotaingLines.module.scss';

const cx = classNames.bind(styles);

function RotaingLines() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <div className={cx('circle')}></div>
        <div className={cx('circle')}></div>
        <div className={cx('circle')}></div>
      </div>
    </div>
  );
}

export default RotaingLines;
