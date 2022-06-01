import React from 'react';
import './btn.scss';

const btnArr = [
  'btn-green-solid',
  'btn-pink-solid',
  'btn-yellow-solid',
  'btn-disabled',
  'btn-lightgray-outline',
];

function Btn({ children, type, onClick, btnStyle }) {
  const setBtnStyle = btnArr.includes(btnStyle) ? btnStyle : btnArr[0];

  return (
    <button className={`btn ${setBtnStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Btn;
