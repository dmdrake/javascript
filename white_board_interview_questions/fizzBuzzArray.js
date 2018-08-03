/* given an array replace multiples of 3 to Fizz, multiples of 5 to Buzz, and replace multiples of 3 and 5
to FizzBuzz

For this problem you will create two pointer a low pointer(which will start at the array.) and a high
pointer(which will be at the end of the array.) The low pointer will iterate through each element
in the array. The appropriate elements will be changed and the low pointer will increase by 1.
*/
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
console.log("The numbers before sorting");
console.log(arr);
console.log("-------------------------------");
console.log("The numbers after sorting");
fizzBuzz(arr);
console.log(arr);

function fizzBuzz(arr){
    //Pointers at the start and end of the array.
    low = 0;
    high = arr.length -1;

    while (low <= high){
        //The modulo operator returns the remainder. If the remainder is zero than the number is
        //the is a multiple of the 3, 5, or both. 
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