import { expect } from "chai";
import BasicAlgorithm from "../app.js";

describe("Basic Algorithm Test", function(){
    let basicAlgorithm = new BasicAlgorithm();
    describe("Return sum", function(){
        let sum = 5;
        it(`should return equal to the ${sum}`, function(){
            let result = basicAlgorithm.sum(2, 3);
            expect(result).to.equal(sum);
        });
    });
    
    describe("Celsius to fahrenheit", function(){
        let fahrenheit = 212;
        it(`should return equal to the ${fahrenheit}`, function(){
            let result = basicAlgorithm.celciusToFahrenheit(100);
            expect(result).to.equal(fahrenheit);
        });
    });
    
    describe("Factorial", function(){
        let factorial = 5040;
        it(`should return equal to the ${factorial}`, function(){
            let result = basicAlgorithm.factorial(7);
            expect(result).to.equal(factorial);
        });
    });

    describe("Count greater than y", function(){
        let y = 3;
        it(`should return equal to the ${y}`, function(){
            let result = basicAlgorithm.returnArrayCountGreaterThanY([2,3,5], 1);
            expect(result).to.equal(y);
        });
    });

    describe("Sum of fibonacci", function(){
        let sumFibonacci = 13;
        it(`should return equal to the ${sumFibonacci}`, function(){
            let result = basicAlgorithm.fibonacci(7);
            expect(result).to.equal(sumFibonacci);
        });

    });
});
