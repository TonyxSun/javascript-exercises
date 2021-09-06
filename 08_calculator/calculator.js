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
  return total;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
