/* given an array replace multiples of 3 to Fizz, multiples of 5 to Buzz, and replace multiples of 3 and 5
to FizzBuzz

*/
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
console.log("The numbers before sorting");
console.log(arr);
console.log("-------------------------------");
console.log("The numbers after sorting");
fizzBuzz(arr);
console.log(arr);

function fizzBuzz(arr){
    low = 0;
    high = arr.length -1;

    while (low <= high){
        if (arr[low] % 3 === 0 && arr[low] % 5 === 0){
            arr[low] = "FizzBuzz";
            low++;
        }
        else if (arr[low] % 5 === 0){
            arr[low] = "Buzz";
            low++;
        }
        else if(arr[low] % 3 === 0){
            arr[low] = "Fizz";
            low++;
        }
        else{
            low++;
        }
    }
    return arr;
}