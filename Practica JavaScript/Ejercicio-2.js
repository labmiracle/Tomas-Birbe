let accum = 0;
let counter = 0;
function sum(arr, n) {
	
	if (counter !== n-1 ) {
		counter = n-1;
		accum = sum(arr, n)
	}
	counter--;

	return arr[counter] + arr[accum];
}

console.log(sum([1,2,3,4,5], 3 ))
