function isAlphabetRegex(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

function sanitize(inputValue){
    let newString = "";
    for (let i = 0; i < inputValue.length; i++){
        //if the character is valid, then add it to the new string
        if (isAlphabetRegex(inputValue[i])){
            newString += inputValue[i];
        }
    }
    return newString.toUpperCase();
}

const palindromes = function (inputValue) {
    let newString =  sanitize(inputValue);
    //loop based on the length of the word divide by 2 and round down (e.g. if the word is 7 letters, then we want to 3 times - 7/2 = 3.5 then round down).)
    //compare the first to the last, then the second to the second last, etc.
    for (let i = 0; i < Math.floor(newString.length/2); i++){
        //if the compared characters aren't equal, then its not a palindrome.
        if (newString[i] !== newString[newString.length-i-1]){
            return false;
        }
    }
    //after checking, all the letters matched, so its a palindrome!
    return true;
};

// Do not edit below this line
module.exports = palindromes;
