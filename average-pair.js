// add whatever parameters you deem necessary
function averagePair(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		if ((array[left] + array[right]) / 2 === target) return true;
		else if ((array[left] + array[right]) / 2 < target) left++;
		else right--;
	}

	return false;
}

module.exports = averagePair;
