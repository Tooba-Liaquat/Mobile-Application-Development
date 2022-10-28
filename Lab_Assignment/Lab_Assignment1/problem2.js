//Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20

let value = 2568;
sum = value.toString().split('').map(Number).reduce(function (a, b) {
    return a + b;
}, 
0);

console.log(sum);
