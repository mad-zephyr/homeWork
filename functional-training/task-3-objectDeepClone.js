const data = {
  id: 1,
  first_name: "Muffin",
  ip_address: "15.158.103.219",
  vechicle : {
		vin: "SCFHDDAJ9AA412100",
		maker: "Lexus",
		color: "Yellow"
	},
	methods : {
		drive: (direction) => {
			const test = direction + 23
			console.log(test)
		},
		metrics: 'km',
		history: [
			{id: 0, start: 'Botanica', end: 'Rishcani', date: '12314455'},
			{id: 1, start: 'Buicani', end: 'Center', date: '2345sdf'},
			{id: 2, start: 'Chisinau', end: 'Tiraspol', date: 'sdfwrf'},
			{id: 3, start: 'Ungheni', end: 'Telecentru', date: Date.now()},
		]
	},
	property: null,
}

const arr = [
	{id: 0, start: 'Botanica', end: 'Rishcani', date: '12314455'},
	{id: 1, start: 'Buicani', end: 'Center', date: '2345sdf'},
	{id: 2, start: 'Chisinau', end: 'Tiraspol', date: 'sdfwrf'},
	{id: 3, start: 'Ungheni', end: 'Telecentru', date: Date.now()},
]


function createDeepClone(ititialData) {
	const DATA = {}

	for (const keys in ititialData) {
		if (ititialData.hasOwnProperty([keys]) && typeof ititialData[keys] !== 'object') {
			DATA[keys] = ititialData[keys]
		}
		if (ititialData.hasOwnProperty([keys]) && typeof ititialData[keys] === 'object') {
			DATA[keys] = createDeepClone(ititialData[keys])
		}
	}
	return DATA
}

const newData = createDeepClone(data)
const newArr = arr.map(item => createDeepClone(item))
newArr[2].id = 23455

newData.methods.history[0].id = 2342325254
newData.methods.history[3].id = '---------===='
newData.methods.history[3].date = () => {console.log('HELLO')}
data.vechicle.color = 'PURPLE'

console.log('Data:', data)
console.log('NewData:', newData)
console.log('arr:', arr)
console.log('newArr:', newArr)

