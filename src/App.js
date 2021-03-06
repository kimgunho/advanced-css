import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './App.module.scss';

import Header from './components/shared/Header';
import Home from './components/Home';
import RotaingLines from './components/css/RotaingLines';
import NeonSignTitle from './components/css/NeonSignTitle';
import BorderAnimation from './components/css/BorderAnimation';
import NavAnimation from './components/css/NavAnimation';

const cx = classNames.bind(styles);

function App() {
  const pages = [
    {
      title: '3 rotating lines',
      link: '/loading/1',
      compo: <RotaingLines />,
    },
    {
      title: 'Neon sign title',
      link: '/neonsign/1',
      compo: <NeonSignTitle />,
    },
    {
      title: 'border animation',
      link: '/border/1',
      compo: <BorderAnimation />,
    },
    {
      title: 'Nav animation [width Js]',
      link: '/nav/1',
      compo: <NavAnimation />,
    },
  ];

  return (
    <BrowserRouter>
      <div className={cx('wrapper')}>
        <Header gnb={pages} />
        <div className={cx('content')}>
          <Routes>
            <Route path="/" element={<Home />} />
            {pages.map((component, index) => (
              <Route
                key={index}
                path={component.link}
                element={component.compo}
              />
            ))}
            <Route path="*" element={<div>존재하지 않는 페이지입니다.</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
