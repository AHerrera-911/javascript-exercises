const repeatString = function(string, num) {
    totalString="";
    if (num <0){
        return"ERROR";
    }
    else {
        for (i=1; i<=num; i++){
            totalString += string;
        }
        return totalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
