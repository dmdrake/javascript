/* Given an array of numbers please use bubble sort to sort the elements and explain how it works

This answer will be coded in JavaScript.

Bubble sort goes through and compares each index to each other one at a time. If the number on the right is larger than the one on the left, the numbers are shifted. This will happen until the function goes through the entire array without swapping any elements which will exit it's loop and return the array.
*/

var arr = [3, 5, 6, 1, 9, 2, 4, 8, 7];
console.log("The numbers before sorting");
console.log(arr);
console.log("-------------------------------");
console.log("The numbers after sorting");
bubbleSort(arr);
console.log(arr);

function bubbleSort(arr){
    /*sets a variable that will be checked in the while part of the do-while loop.
    The variable gets sets to True when elements in the array are swapped. The loop will end
    when the variable is set to false.*/
    var swapped;
    do{//start of the do-while loop. Sets 'swapped' to false when the code exits the for loop.
        swapped = false;
        for (var i=0; i <arr.length-1; i++){//iterates through the array.
            //if statement that checks if the current index is greater than the index to the right.
            if (arr[i] > arr[i+1]){
                //uses a temp var to flip the current index with it's index on the right.
                var temp = arr[i];
                arr[i] = arr[i++];
                arr[i++] = temp;
                swapped = true;
            }
        }
    }
    while (swapped);//while condition. while 'swapped' is true the do-while loop continues. 
}
