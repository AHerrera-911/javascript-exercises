const convertToCelsius = function(inputValue) {
  if (((inputValue-32)*5/9).toFixed(1) == 0){
    return 0;
  }
  else{
    return parseFloat(((inputValue-32)*5/9).toFixed(1));
  }
};

const convertToFahrenheit = function(inputValue) {
  if (((inputValue * (9/5)) + 32).toFixed(1) == 0){
    return 0;
  }
  else {
    return parseFloat(((inputValue * (9/5)) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
