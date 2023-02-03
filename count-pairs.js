// add whatever parameters you deem necessary

function countPairs(array, target) {
	let pairCount = 0;
	let first = 0;
	let second = 1;
	let pairArray = [];

	while (first < array.length) {
		if (second > array.length) {
			second = 0;
			first++;
		}

		if (
			array[first] + array[second] === target &&
			!pairArray.includes(array[first]) &&
			!pairArray.includes(array[second]) &&
			array[first] !== array[second]
		) {
			pairArray.push(array[first]);
			pairArray.push(array[second]);
			pairCount++;
		} else {
			second++;
		}
		second++;
	}
	return pairCount;
}
module.exports = countPairs;
