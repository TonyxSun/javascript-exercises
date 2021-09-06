const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {

	const sum = array.reduce((total, item) => {
    return total + item;
  }, 0)
  return sum;
};

const multiply = function(array) {
  const result = array.reduce((total, item) => {
    return total*item;}, 1);
  return result;
};

const power = function(a, power) {
	return a**power;
};

const factorial = function(num) {
  if (num == 0) return 1;
  return factorial(num-1)*num;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
