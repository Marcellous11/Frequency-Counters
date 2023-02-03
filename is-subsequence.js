// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	let str1Array = str1.split('');
	let str2Array = str2.split('');

	for (let i = 0; i < str2Array.length; i++) {
		if (str1Array[0] === str2Array[i]) {
			str1Array.shift();
		}
	}
	return str1Array.length === 0 ? true : false;
}

module.exports = isSubsequence;
