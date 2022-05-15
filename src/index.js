import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode 를 주석처리 하지 않고 실행하면 console이 두번씩 찍힌다 (double invoke)
  // stricmode의 경우, 개발 과정중 안전을 위해 켜는 기능이며 배포시에 자동으로 해제된다고 함
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
