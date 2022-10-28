//Write a JavaScript that calculates the squares and cubes of the 
//numbers from 0 to 10.
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log("array = "+arr);
// square();
// cubes();
function square(num){
    return num **2;
}
console.log("squares = "+arr.map(square));

function cubes(num){
    return num*num*num;
}
console.log("cubes = "+arr.map(cubes));


