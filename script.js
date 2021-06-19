function myFunction(num){
    for(var i = 0; i <= num; i++ ){
        if(i % 3 == 0){

            console.log(i + " Fizz");
            
        }
        if(i % 5 == 0){

            console.log(i + " Buzz");
            
        }
        if(i % 15 == 0){

            console.log(i + " FizzBuzz");

        }

          
    }

}
myFunction(15);

