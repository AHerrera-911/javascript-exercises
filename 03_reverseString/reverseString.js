const reverseString = function(inputValue) {
    let newString = "";
    for (i = inputValue.length; i >= 0; i--){
        newString += inputValue.charAt(i);
    }
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
