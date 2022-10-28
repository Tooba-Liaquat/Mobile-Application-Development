//Write a JavaScript function that returns a passed string with letters in alphabetical order.

let str="comsats";
pass_str(str);

function pass_str(str){
    return str.split('').sort().join('');
}

console.log(pass_str(str));