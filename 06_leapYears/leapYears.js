const leapYears = function(inputValue) {
  if ( inputValue % 4 == 0 && (inputValue % 100 !== 0 || inputValue % 400 == 0)) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
