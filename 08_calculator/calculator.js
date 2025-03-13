const calculator= function (input){
  return (input());
};

const add = function() {
  let total=0;
  for (let i=0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;	
};

const subtract = function() {
	return (arguments[0] - arguments[1]);
};

const sum = function() {
	let inputArray = arguments[0];
  let total=0;
  for (let i=0; i < inputArray.length; i++){
    total += inputArray[i];
  }
  return total;	
};

const multiply = function() {
  let inputArray = arguments[0];
  let total=1;
  for (let i=0; i < inputArray.length; i++){
    total *= inputArray[i];
  }
  return total;	

};

const power = function(inputValue1, inputValue2) {
  return (inputValue1 ** inputValue2);
	
};

const factorial = function(inputValue) {
   let total = 1;
    for (let i = 1; i<=inputValue; i++){
      total *= i;
    }
    return total;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
