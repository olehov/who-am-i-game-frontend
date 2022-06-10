function messageConverter(mode, message) {
  if (mode === 'response') {
    if (message === 'yes') {
      return 'Right. Your turn';
    } else if (message === 'no') {
      return 'Wrong. Passing turn';
    } else {
      return "Don't know. Try again";
    }
  } else {
    return message;
  }
}

export default messageConverter;
