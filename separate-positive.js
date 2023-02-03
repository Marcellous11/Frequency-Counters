// add whatever parameters you deem necessary
function separatePositive(array) {
	let first = 0;
	let second = 1;
	let traded = true;

	while (array[second]) {
		console.debug('first -->', array[first], 'seocnd -->', array[second]);
		if (array[first] < array[second]) {
			let temp = array[first];
			array[first] = array[second];
			array[second] = temp;
			traded = false;
			first = 0;
			second = 1;
		}
		first++;
		second++;
	}

	return array;
}
module.exports = separatePositive;
