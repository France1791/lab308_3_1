function fizzBuzz(num){
    for(i = 1; i <= num; i++){
        //first condition if the number is divisible by 3
        if(i % 3 === 0){
            console.log("Fizz");
           // second condition if number is divisible by 5
        }else if(i % 5 === 0){
            console.log("Buzz");
            //now let's check if number is divisible by 3 and 5
        }else if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizz Buzz");
            //and lastly if number is not divisible by either 3 or 5
        } else console.log(i);
    }
}

fizzBuzz(10);