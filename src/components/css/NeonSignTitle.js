import classNames from 'classnames/bind';

import styles from './NeonSignTitle.module.scss';

const cx = classNames.bind(styles);

function NeonSignTitle() {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h2>
          <span>h</span>
          <span>el</span>
          <span>l</span>
          <span>o</span>&nbsp;
          <span>world</span>
          <span>!</span>
        </h2>
      </div>
    </div>
  );
}

export default NeonSignTitle;
