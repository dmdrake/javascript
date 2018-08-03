/* Print number 1 through 25. For each number that is a multiple of 3
replace with Fizz, for each number that is multiple of 5 replace with
Buzz, and for each number that is multiple of 3 and 5 replace with
FizzBuzz.

Using a for loop and if else if conditions, print each number 1 through 
25.
*/

for (var i =1 ; i <= 30; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else if(i % 3 ===0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}