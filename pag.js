let next = ['Next 1', 'Next 2', 'Next 3', 'Next 4', 'Next 5', 'Next 6', 'Next 7', 'Next 8', 'Next 9', 'Next 10',
	'Next 11', 'Next 12', 'Next 13', 'Next 14', 'Next 15', 'Next 16', 'Next 17', 'Next 18', 'Next 19', 'Next 20',
	'Next 21', 'Next 22', 'Next 23', 'Next 24', 'Next 25', 'Next 26', 'Next 27', 'Next 28', 'Next 29', 'Next 30',
	'Next 31', 'Next 32', 'Next 33', 'Next 34', 'Next 35', 'Next 36', 'Next 37', 'Next 38', 'Next 39', 'Next 40', 'Next 41',
	'Next 42', 'Next 43', 'Next 44', 'Next 45', 'Next 46', 'Next 47', 'Next 48', 'Next 49', 'Next 50'
];

function pagination(items, pageActual, limitItems) {
	let result = [];
	let totalPage = Math.ceil(items.length / limitItems);
	let count = (pageActual * limitItems) - limitItems;
	let delimiter = count + limitItems;
	if (pageActual <= totalPage) {
		for (let i = count; i < delimiter; i++) {
			if (items[i] != null) {
				result.push(items[i]);
			}
			count++;
		}
	}
	return result;
};

function orchestrator(arr) {
	let leng = arr.length;
	let countAux = 0;
	let page = 1;
	while (countAux < leng) {
		let resultNext = pagination(arr, page, 15)
		countAux = countAux + 15;
		console.log(` Page: ${page} ${resultNext}`)
		page = page + 1;
	}
}

orchestrator(next)