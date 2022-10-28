//Develop and demonstrate JavaScript script that uses functions for the following problems: 
// 1.	Parameter: A string 
// 2.	Output: The position in the string of the left-most vowel 
// 3.	Parameter: A number  
// 4.	Output: The number with its digits in the reverse order

let str="tooba";
let num=5678;
str_vowel(str);
num_reverse(num);

function str_vowel(str)
{
    
	for(var i = 0; i<str.length; i++)
	{
		if (str.charAt(i) =='a' || str.charAt(i) == 'e' || str.charAt(i) =='i'
		|| str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
		str.charAt(i) == 'E' || str.charAt(i) =='I' || str.charAt(i) =='O' || str.charAt(i) == 'U')
		{
			console.log("The entered string is:" +str);
			console.log("The leftmost vowel is :"+str.charAt(i));
			var pos = i+1;
			console.log("The position of the leftmost vowel " +str.charAt(i)+ " is:" +pos);
            break;
        }
        //console.log("The entered string has no vowels");
	}
}
////
function num_reverse(num){
    num = num + "";
	return num.split("").reverse().join("");
}
console.log("Number is "+num+" Reverse is "+Number(num_reverse(num)));