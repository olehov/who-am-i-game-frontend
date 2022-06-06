function convertTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (seconds <= 0 && minutes === 0) {
    return '00:00';
  }

  return `${minutes < 10 ? '0' + minutes : minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }`;
}

export default convertTime;
