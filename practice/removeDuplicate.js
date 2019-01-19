function solve(arr) {
	//..
	let set = new Set([]);
	let ans = arr.slice();
	for (const val of arr) {
		if (set.has(val)) {
			const firstIndex = ans.indexOf(val);
			ans.splice(firstIndex, 1);
		}
		set.add(val);
	}/*
	for (let index = 0; index < arr.length; index++) {
		let tempArray = ans.slice();
		const val = arr[index];
		const firstIndex = ans.indexOf(val);
		if (set.has(val)) {
			tempArray.splice(firstIndex, 1);
			ans = tempArray;
		}
		set.add(val);
	}*/
	return ans;
}
var x = [1, 3, 2, 5];
console.log(x.slice(1, 4));
console.log(x.splice(1, 1));

console.log(solve([3, 4, 4, 3, 6, 3]));