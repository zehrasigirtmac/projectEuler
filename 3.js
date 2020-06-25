function largestPrimeFactor(number) {
    let primesAndFactor = [];
    
    for (let factorIterator = 0; factorIterator <= number; factorIterator++) {
      
      let isFactor = number % factorIterator == 0;
      let isPrime = true;
  
      if (isFactor) {
        
        for (let i = 2; i < factorIterator; i++) {
          
          if (factorIterator % i == 0) {
            isPrime = false;
            continue;
          }
        }
      }
  
      
      if (isFactor && isPrime) {
        primesAndFactor.push(factorIterator);
      }
    }
    return primesAndFactor.pop();
  }
  
  largestPrimeFactor(13195);