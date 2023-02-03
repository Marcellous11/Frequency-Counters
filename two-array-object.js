// add whatever parameters you deem necessary
function twoArrayObject(arrayKeys, arrayValues) {
	let obj = {};

	for (let i = 0; i < arrayKeys.length; i++) {
		obj[arrayKeys[i]] = arrayValues[i] || null;
	}
	return obj;
}

module.exports = twoArrayObject;
