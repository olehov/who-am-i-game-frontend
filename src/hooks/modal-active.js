/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

let listeners = [];
let state = false;

const setState = (newState) => {
  state = newState;
  listeners.forEach((listener) => {
    listener(state);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);

  return [state, setState];
};

export default useCustom;
