//Write a JavaScript program to check whether 10 appears in first or last position of
// a given array of integers. The array length must be greater or equal to 2.

let arr=[1,2,3,4,5,6,7,10];
arr_fun(arr);

function arr_fun(arr){
    if(arr[0]==10){
        console.log("10 is at first position");
    }
    else if (arr[arr.length-1]==10) {
        console.log("10 is at last position");
    } 
    else {
        console.log("10 is neither first nor at last position");
    }
}