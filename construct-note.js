// add whatever parameters you deem necessary
function constructNote(messages, letters) {
	function makeObj(str) {
		let obj = {};
		for (let el of str) {
			obj[el] = obj[el] + 1 || 1;
		}
		return obj;
	}

	if (!letters.length) return false;

	let messagesObj = makeObj(messages);
	let lettersObj = makeObj(letters);

	for (key in messagesObj) {
		if (messagesObj[key] > lettersObj[key]) return false;
	}
	return true;
}

module.exports = constructNote;
