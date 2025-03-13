const removeFromArray = function() {
    let arrayValue = arguments[0];
      for (let i = 1; i <= arguments.length; i++){
        for (let j = 0; j < arrayValue.length; j++){
            if (arrayValue[j] == arguments[i]){
                arrayValue.splice(j,1);
            }
        }
      }
    
    return arrayValue;
};

// Do not edit below this line
module.exports = removeFromArray;
