'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  base1 = 2;
  base2 = 10;
  upperLimit = 1000000;
  return (upperLimit).toString(base1) + (upperLimit).toString(base2);
};

module.exports = {
  doubleBasePalindromeSum,
};
