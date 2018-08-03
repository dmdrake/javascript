/*Given the array please sort the numbers within the time of 0(n)

For this solution you will need to create three variables; a high mid and low pointer. The low pointer goes at the beginning of the array and 
the high pointer at the end of the array. place the mid pointer at the begining of the array and have it iterate through.

If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1.

*/

var arr = [1,2,0,1,2,0,0,1,2,1];
console.log("The numbers before sorting");
console.log(arr);
console.log("-------------------------------");
console.log("The numbers after sorting");
dutchFlagSort(arr);
console.log(arr);

function dutchFlagSort(arr) {
    
    var low = 0;
    var mid = 0;
    var high = arr.length - 1;
    
    // one pass through the array swapping
    // the necessary elements in place
    while (mid <= high) {
        //Takes the low and mid pointers, swaps them and increases both by one. 
        if (arr[mid] === 0) { swap(arr, low++, mid++); }
        //Takes the mid and high pointers, swaps them and decreases the high pointer by one.
        else if (arr[mid] === 2) { swap(arr, mid, high--); }
        //Takes the mid pointer and increases it by one. 
        else if (arr[mid] === 1) { mid++; }
    }
    
    return arr;
    
}

function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    //VVV shows each iteration when uncommented VVV
    //console.log(arr);
}