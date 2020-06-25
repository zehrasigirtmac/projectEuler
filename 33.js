var productNumerator = 1;
var productDenominator = 1;

for (var tensNumerator = 1; tensNumerator < 10; tensNumerator++) {
    for (var onesNumerator = 0; onesNumerator < 10; onesNumerator++) {
        var numerator = tensNumerator * 10 + onesNumerator;

        for (var tensDenominator = 9; tensDenominator >= tensNumerator; tensDenominator--) {
            for (var onesDenominator = 9;
            (onesDenominator > 0) && ((tensDenominator > tensNumerator) || (onesDenominator > onesNumerator)); onesDenominator--) {
                var denominator = tensDenominator * 10 + onesDenominator;

                var fraction = numerator / denominator;
                
                if(tensNumerator == tensDenominator){
                    if(fraction == onesNumerator/onesDenominator){
                        productNumerator *= numerator;
                        productDenominator *= denominator;
                        
                        console.log('Numerator: ' + numerator + '  Denominator: ' + denominator);
                        console.log('  Numerator: ' + onesNumerator + '  Denominator: ' + onesDenominator);
                    }                    
                }
                if(tensNumerator == onesDenominator){
                    if(fraction == onesNumerator/tensDenominator){
                        productNumerator *= numerator;
                        productDenominator *= denominator;
                        console.log('Numerator: ' + numerator + '  Denominator: ' + denominator);
                        
                        console.log('  Numerator: ' + onesNumerator + '  Denominator: ' + tensDenominator);
                    }
                    
                }
                if(onesNumerator == tensDenominator ){
                    if(fraction == tensNumerator/onesDenominator){
                        productNumerator *= numerator;
                        productDenominator *= denominator;
                        console.log('Numerator: ' + numerator + '  Denominator: ' + denominator);
                        console.log('  Numerator: ' + tensNumerator + '  Denominator: ' + onesDenominator);
                    }
                    
                }
                if(onesNumerator == onesDenominator){
                    if(fraction == tensNumerator/tensDenominator){
                        productNumerator *= numerator;
                        productDenominator *= denominator;
                        console.log('Numerator: ' + numerator + '  Denominator: ' + denominator);
                        console.log('  Numerator: ' + tensNumerator+ '  Denominator: ' + tensDenominator);
                    }
                }
            }
        }
    }
}
    console.log('productNumerator: ' + productNumerator + '  productDenominator: ' + productDenominator);