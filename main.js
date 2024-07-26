// Class
class BasicAlgorithm{
    sum(num1, num2){
        return num1 + num2;
    }
    celciusToFahrenheit(cDegrees){
        return ( 9/5 * cDegrees) + 32;
    }
    factorial(num){
        let result = 1;
        for(let i = 1; i <= num; i++){
            result *= i;
        }
        return result;
    }
}
export default BasicAlgorithm;

// Function
// export default function sum(num1, num2){
//     return num1 + num2;
// }