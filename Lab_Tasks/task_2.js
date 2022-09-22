
const name=(n)=> {
     console.log(n)
 }
 console.log("Name is ")
 name('Tooba Liaquat')
 
 console.log("--------")
 
 const even_odd=(...args)=>{
 let s=args.length;    
 console.log("Total numbers = "+s)
 console.log(args)
 
 let even=[]
 let odd=[]
 
 for(let i=0;i<args.length;i++){
     if(args[i] %2===0){
         even.push(args[i]); 
     }
     else{
         odd.push(args[i])
     }
 }
 
 console.log("--------")
 console.log("Even ");
 console.log(even)
 console.log("--------")
 console.log("Odd ");
 console.log(odd)
 console.log("--------")
 console.log("Dividied Even numbers by 2")
 let div_even=even.map(divide)
 function divide(num){
     return num / 2;
 }
 console.log(div_even)
 console.log("--------")
 console.log("Multiplied Odd numbers by 2")
 let mul_odd=odd.map(multiply)
 function multiply(num){
     return num *2;
 }
 console.log(mul_odd)
 
 var obj={
     odd_num:odd,
     even_num:even
 }
 console.log("--------")
 console.log("Object of Odd and Even")
 console.log(obj)
 
 return obj;
 }
 
 even_odd(2,3,4,5,6,7,8)
 