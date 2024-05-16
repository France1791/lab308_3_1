// function fizzBuzz(num){
//     for(i = 1; i <= num; i++){
//         //first condition if the number is divisible by 3
//         if(i % 3 === 0){
//             console.log("Fizz");
//            // second condition if number is divisible by 5
//         }else if(i % 5 === 0){
//             console.log("Buzz");
//             //now let's check if number is divisible by 3 and 5
//         }else if(i % 3 === 0 && i % 5 === 0){
//             console.log("Fizz Buzz");
//             //and lastly if number is not divisible by either 3 or 5
//         } else console.log(i);
//     }
// }

// fizzBuzz(10);

//prime number: whole number greater than 1, can't be divided by  whole number other than itself and 1.

//let's take a function function primeNum, with one parameter (n) a number. look through all whole numbers starting from 2 and find the first number that is greater than 2 and can't be divided
//by any other numbers other than itself and 1
function isPrime(num){
    if(num<=1) return false
    for(let i = 2 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
function primeNum(n){

    for(i = 1; i<= n; i++){
        //console.log("hi")
        if (isPrime(i)){
            console.log(i);
        }
        
    }

}
primeNum(100)


