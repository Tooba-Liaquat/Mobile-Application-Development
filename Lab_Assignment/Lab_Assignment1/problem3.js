//Write program to find sum of even digits. Input 23617 output 2+6=8.

let n=23617;
//const arr=num.toString().split('').map(Number);
getsum(n);

function getsum(n){
    let s=0;
    let num=(n).toString();
    
    for(let i=0;i<num.length;i++){
        if(i%2==0){
            s=s+(num[i] - '0');
        } 
    }
    console.log(s);
    
}
