import { useRef, useEffect } from 'react';
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    if (typeof callback === 'function') savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current != null) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
};
