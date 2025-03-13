const sumAll = function(firstInput, secondInput) {
    //if submitted values are not positive integers then return an error.
    if (firstInput < 0 || secondInput <0 || !Number.isInteger(firstInput) || !Number.isInteger(secondInput)){
        return "ERROR";
    }

    let lowerValue = firstInput;
    let higherValue = secondInput;
    //swap values if the firstInput is higher than secondInput since we are using the firstInput Value to start the for loop.
    if (secondInput < firstInput) {
        lowerValue = secondInput;
        higherValue = firstInput;
    }
    let sum = 0;
    for (let i = lowerValue; i <= higherValue; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
