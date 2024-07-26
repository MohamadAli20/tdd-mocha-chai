import { expect } from "chai";
import BasicAlgorithm from "../main.js";

describe("Basic Algorithm Test", function(){
    let basicAlgorithm = new BasicAlgorithm();
    describe("Return sum", function(){
        let sum = 5;
        it(`should return equal to the ${sum}`, function(){
            let result = basicAlgorithm.sum(2, 3);
            expect(result).to.equal(sum);
        })
    });
    
    describe("Celsius to fahrenheit", function(){
        let fahrenheit = 212;
        it(`should return equalt to the ${fahrenheit}`, function(){
            let result = basicAlgorithm.celciusToFahrenheit(100);
            expect(result).to.equal(fahrenheit);
        });
    });
    
    describe("Factorial", function(){
        // let 
    });
});
