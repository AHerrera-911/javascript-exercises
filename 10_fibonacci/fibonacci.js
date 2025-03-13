const fibonacci = function(inputValue) {
    let fibonacciPosition = Number(inputValue);
    let previousValue = 0;
    let nextValue = 1;
    if (fibonacciPosition < 0){
        return "OOPS"
    }
    else if (fibonacciPosition == 0){
        return 0;
    }
    else{
        for (let i = 2; i<= fibonacciPosition; i++){
            let fibonacciValue = nextValue+ previousValue;
            previousValue = nextValue;
            next = fibonacciValue;
        }
        return next;
    }
};

// Do not edit below this line
module.exports = fibonacci;
