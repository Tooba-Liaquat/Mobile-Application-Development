// Function to find the kth digit
// from last in an integer n
function kthDigitFromLast(n, k)
{
	// If k is less than equal to 0
	if (k <= 0)
	{
		console.log(-1);
		return;
	}

	// Convert integer into string
	var temp = String(n);
	
	// If k is greater than length of the
	// string temp
	if (k > temp.length)
	{
		console.log(-1);
	}
	
	// Print the k digit from last
	else
	{
		var req = temp.charAt(temp.length - k)
		
		// Convert to number again
		console.log(Number(req));
	}
}

// Given Input
var n = 2354;
var k = 2;

// Function call
kthDigitFromLast(n, k);

  
 
 