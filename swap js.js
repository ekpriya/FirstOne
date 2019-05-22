function swap_adjacent_digits() 
{
	 var n = parseInt(document.getElementById("Text1").value);
           console.log(n);
  if (n%2!=0)
    {
    return false;
    }

  var result = 0,
		x = 1;
	while (n != 0) {
		var dg1 = n % 10,
			dg2 = ((n - dg1) / 10) % 10;
		result += x * (10 * dg1 + dg2);
		n = Math.floor(n / 100);
		x *= 100;
	}
	console.log(result);
	document.getElementById("textresult").value = result; 
}

/*console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));

            /*function add_number(){
            var first_number = parseInt(document.getElementById("Text1").value);
            var second_number = parseInt(document.getElementById("Text2").value);
            var result = first_number + second_number;
            console.log(result);
            document.getElementById("txtresult").value = result;    
            }
*/