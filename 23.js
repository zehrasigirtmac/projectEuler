var getFactors = function(number) {
    var factors = [];

    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while (possibleFactor <= sqrt) {
        if (number % possibleFactor == 0) {
            factors[factors.length] = possibleFactor;

            var otherPossibleFactor = number / possibleFactor;
            if (otherPossibleFactor > possibleFactor) {
                factors[factors.length] = otherPossibleFactor;
            }
        }
        possibleFactor++;
    }

    return factors;
}; 
var getAbundantNumbers = function(upperLimit) {
    var abundantNumbers = [];
    for (var i = 12; i <= upperLimit; i++) {
        var factors = getFactors(i);
        var factorSum = 0;
        for (var factor, j = 0; factor = factors[j]; j++) {
            if (i != factor) {
                factorSum += factor;
            }
        }
        if (factorSum > i) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
};

var getNonSumsOfAbundandNumbers = function(MAX_NUM_TO_CONSIDER ) {
    var abundantNumbers = getAbundantNumbers(MAX_NUM_TO_CONSIDER );

    var sum = 0;
    
    for (var testNum = 1; testNum <= MAX_NUM_TO_CONSIDER; testNum++) {
        var sumOfAbundant = false;
        for (var i = 0, j=abundantNumbers.length - 1, abundantNumber1; abundantNumber1 = abundantNumbers[i]; i++) {
            if(abundantNumber1 > testNum){
                break;
            }
            
            var abundantNumber2 = abundantNumbers[j];
            while((j > 0) && ((abundantNumber1 + abundantNumber2) > testNum)){
                abundantNumber2 = abundantNumbers[--j];
            }                
            
            if((abundantNumber1 + abundantNumber2) == testNum) {
                sumOfAbundant = true;
                break;
            }
        }
        if(!sumOfAbundant){
            sum += testNum;
        }
    }
    
    return sum;
};

console.log(getNonSumsOfAbundandNumbers(50000));