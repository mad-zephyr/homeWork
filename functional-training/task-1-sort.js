const data = [{
  "id": 1,
  "first_name": "Muffin",
  "last_name": "Esslement",
  "gender": "Agender",
  "age": 30,
  "ip_address": "15.158.103.219",
  "slogan": "incentivize rich relationships"
}, {
  "id": 2,
  "first_name": "Archie",
  "last_name": "Strangeways",
  "gender": "Male",
  "age": 37,
  "ip_address": "76.95.55.212",
  "slogan": "reinvent distributed portals"
}, {
  "id": 3,
  "first_name": "Petunia",
  "last_name": "Thebeaud",
  "gender": "Female",
  "age": 23,
  "ip_address": "174.27.95.108",
  "slogan": "benchmark transparent relationships"
}, {
  "id": 4,
  "first_name": "Shirleen",
  "last_name": "Dechelette",
  "gender": "Female",
  "age": 40,
  "ip_address": "151.203.149.60",
  "slogan": "cultivate virtual metrics"
}, {
  "id": 5,
  "first_name": "Levin",
  "last_name": "Splevings",
  "gender": "Male",
  "age": 27,
  "ip_address": "156.108.57.205",
  "slogan": "optimize enterprise platforms"
}, {
  "id": 6,
  "first_name": "Moria",
  "last_name": "Menis",
  "gender": "Female",
  "age": 17,
  "ip_address": "186.34.96.223",
  "slogan": "target next-generation e-tailers"
}, {
  "id": 7,
  "first_name": "Jodi",
  "last_name": "Elsegood",
  "gender": "Male",
  "age": 38,
  "ip_address": "95.110.128.91",
  "slogan": "orchestrate seamless markets"
}, {
  "id": 8,
  "first_name": "Tersina",
  "last_name": "Giddy",
  "gender": "Female",
  "age": 18,
  "ip_address": "88.230.108.229",
  "slogan": "unleash vertical experiences"
}, {
  "id": 9,
  "first_name": "Honey",
  "last_name": "Laverty",
  "gender": "Polygender",
  "age": 23,
  "ip_address": "51.92.43.35",
  "slogan": "generate out-of-the-box communities"
}, {
  "id": 10,
  "first_name": "Gaven",
  "last_name": "Cockney",
  "gender": "Male",
  "age": 23,
  "ip_address": "46.29.100.77",
  "slogan": "matrix cross-media e-markets"
}, {
  "id": 11,
  "first_name": "Donnajean",
  "last_name": "Bugler",
  "gender": "Female",
  "age": 37,
  "ip_address": "51.172.89.146",
  "slogan": "synergize world-class e-tailers"
}, {
  "id": 12,
  "first_name": "Grantley",
  "last_name": "Mulrooney",
  "gender": "Male",
  "age": 22,
  "ip_address": "199.137.236.100",
  "slogan": "streamline turn-key convergence"
}, {
  "id": 13,
  "first_name": "Linea",
  "last_name": "Paradin",
  "gender": "Female",
  "age": 16,
  "ip_address": "6.240.180.107",
  "slogan": "brand granular technologies"
}]

function compose(initial, callback) {
  const _Arr = [...initial]
  return (key, direction) => callback(_Arr, key, direction)
}

function letsSort(array, key, direction = 'asc') {
  const _Arr = [...array]

	for (let i = 0; i < _Arr.length; i++) {
    for (let j = 0; j < _Arr.length - i - 1; j++) {

      if ( _Arr[j + 1][key] < _Arr[j][key] && direction === 'asc') {
        [_Arr[j + 1], _Arr[j]] = [_Arr[j], _Arr[j + 1]]
      }

      if (_Arr[j + 1][key] > _Arr[j][key] && direction === 'dsc') {
        [_Arr[j], _Arr[j + 1]] = [_Arr[j + 1], _Arr[j]] 
      }
    }
  }
  return _Arr
}

function sort(initial, key, direction) {
  if (!Array.isArray(initial)) return initial
  const _data = compose(initial, letsSort)
  return _data(key, direction)
}

console.log('resultName_DCS: ', sort(data, 'first_name', 'dsc'))
console.log('resultName_ASC: ', sort(data, 'first_name'))
console.log('resultAGE_ASC: ', sort(data, 'age'))
console.log('resultAGE_DSC: ', sort(data, 'age', 'dsc'))
console.log('resultGender_DSC: ', sort(data, 'gender', 'dsc'))
