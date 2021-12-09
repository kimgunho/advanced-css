import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './App.module.scss';

import Header from './components/shared/Header';

const cx = classNames.bind(styles);

function App() {
  const gnbs = [
    {
      title: '3 rotating lines',
      link: '/loading/1',
    },
  ];

  return (
    <BrowserRouter>
      <div className={cx('wrapper')}>
        <Header gnb={gnbs} />
        <div className={cx('content')}>
          <Routes>
            <Route />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
