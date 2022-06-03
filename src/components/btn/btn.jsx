import React from 'react';
import './btn.scss';

// <-- Use this names for Button Styles -->
// 'btn-green-solid'
// 'btn-pink-solid'
// 'btn-yellow-solid'
// 'btn-disabled'
// 'btn-lightgray-outline'

function Btn({ children, type, onClick, btnStyle = 'btn-green-solid' }) {
  return (
    <button className={`btn ${btnStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Btn;
