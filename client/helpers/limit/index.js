const limit = (number, max = 15) => {
  if (number > max) {
    return max;
  }

  return number;
};

export default limit;