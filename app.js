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
    returnArrayCountGreaterThanY(arr, y){
        let flag = 0;
        for(let i in arr){
            if(arr[i] > y){
                flag++;
            }
        }
        return flag;
    }
    fibonacci(index){
        let fibo = [0, 1];
        let sum = 0;
        for(let i = 0; i < index+1; i++){
            if(index === 0){
                sum = 0;   
            }else if(index === 1){
                sum += fibo[i];
                fibo.push(sum);
            }else{
                sum += fibo[i];
                fibo.push(sum);
            }
        }
        return sum;
    }
}
export default BasicAlgorithm;

// Function
// export default function sum(num1, num2){
//     return num1 + num2;
// }