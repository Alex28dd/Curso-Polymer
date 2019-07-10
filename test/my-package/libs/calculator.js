const calculator = {
  sum: (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    }
    return `Error no se pudo leer algun dato`;
  },
  rest: (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    return `Error no se pudo leer algun dato`;
  }
};

module.exports = calculator;
