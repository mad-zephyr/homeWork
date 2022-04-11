const data = [4,5,3,6,7,1,2,9,8] 

const sortAction = (initialData, callBack, direction = 'asc') => {
	let data = [...initialData]
  data = data
		.sort((a, b) => direction === 'dsc' ? b - a : a - b)
		.reduce((accumulator, iterator, index, array) => {
			if (!callBack(iterator, index, array)) {
				accumulator.odd.push(iterator)
				return accumulator
			}
			accumulator.even.push(iterator)
			return accumulator
		}, {odd: [], even: []})
	data = Object.values(data)
	data = [data[0], data[1].reverse()].flat(2)
	return data
}

const result = sortAction(data, (dataItem, index) => dataItem % 2 , 'dsc')