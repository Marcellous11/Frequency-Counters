// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	function makeObj(str) {
		let obj = {};
		for (let el of str) {
			obj[el] = obj[el] + 1 || 1;
		}
		return obj;
	}

	let objNum1 = makeObj(num1.toString().split(''));
	let objNum2 = makeObj(num2.toString().split(''));

	for (let key in objNum1) {
		console.log(key);
		if (objNum1[key] !== objNum2[key]) return false;
	}
	return true;
}

module.exports = sameFrequency;
