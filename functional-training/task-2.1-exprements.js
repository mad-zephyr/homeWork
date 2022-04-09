// TASK 2
// 2. Implement map, filter, every, some, find, indexOf with .reduce()
// *****************************************
const data =  [{
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
}, {
  "id": 14,
  "first_name": "Lyn",
  "last_name": "Virgin",
  "gender": "Male",
  "age": 34,
  "ip_address": "6.61.124.10",
  "slogan": "expedite one-to-one solutions"
}, {
  "id": 15,
  "first_name": "Ian",
  "last_name": "Hoffman",
  "gender": "Male",
  "age": 24,
  "ip_address": "115.138.219.48",
  "slogan": "incubate proactive relationships"
}, {
  "id": 16,
  "first_name": "Agnella",
  "last_name": "Elam",
  "gender": "Female",
  "age": 44,
  "ip_address": "85.143.147.193",
  "slogan": "orchestrate real-time mindshare"
}, {
  "id": 17,
  "first_name": "Nealon",
  "last_name": "Davidovic",
  "gender": "Male",
  "age": 30,
  "ip_address": "53.115.187.144",
  "slogan": "syndicate transparent relationships"
}, {
  "id": 18,
  "first_name": "Hurleigh",
  "last_name": "Vauter",
  "gender": "Male",
  "age": 27,
  "ip_address": "96.166.232.131",
  "slogan": "recontextualize sexy e-commerce"
}, {
  "id": 19,
  "first_name": "Valerye",
  "last_name": "Emmanuel",
  "gender": "Female",
  "age": 21,
  "ip_address": "15.103.191.91",
  "slogan": "scale open-source models"
}, {
  "id": 20,
  "first_name": "Chandra",
  "last_name": "Kempstone",
  "gender": "Female",
  "age": 16,
  "ip_address": "0.97.167.206",
  "slogan": "transition strategic deliverables"
}, {
  "id": 21,
  "first_name": "Findley",
  "last_name": "Hacaud",
  "gender": "Genderqueer",
  "age": 27,
  "ip_address": "53.142.3.81",
  "slogan": "orchestrate granular systems"
}, {
  "id": 22,
  "first_name": "Kipp",
  "last_name": "Eseler",
  "gender": "Male",
  "age": 19,
  "ip_address": "44.230.124.29",
  "slogan": "facilitate intuitive e-business"
}, {
  "id": 23,
  "first_name": "Ezechiel",
  "last_name": "Hepher",
  "gender": "Male",
  "age": 16,
  "ip_address": "234.91.10.242",
  "slogan": "enhance sexy functionalities"
}, {
  "id": 24,
  "first_name": "Alfreda",
  "last_name": "Morrid",
  "gender": "Female",
  "age": 31,
  "ip_address": "139.130.194.87",
  "slogan": "e-enable plug-and-play eyeballs"
}, {
  "id": 25,
  "first_name": "Row",
  "last_name": "Dowers",
  "gender": "Genderfluid",
  "age": 28,
  "ip_address": "169.244.195.167",
  "slogan": "seize rich methodologies"
}, {
  "id": 26,
  "first_name": "Dorie",
  "last_name": "Laugharne",
  "gender": "Female",
  "age": 22,
  "ip_address": "177.73.149.115",
  "slogan": "whiteboard integrated partnerships"
}, {
  "id": 27,
  "first_name": "Agnola",
  "last_name": "Iskowitz",
  "gender": "Agender",
  "age": 34,
  "ip_address": "102.131.181.141",
  "slogan": "mesh bricks-and-clicks methodologies"
}, {
  "id": 28,
  "first_name": "Rosy",
  "last_name": "Cariss",
  "gender": "Female",
  "age": 43,
  "ip_address": "178.244.198.106",
  "slogan": "visualize 24/365 solutions"
}, {
  "id": 29,
  "first_name": "Giffer",
  "last_name": "Ruperti",
  "gender": "Male",
  "age": 44,
  "ip_address": "230.35.82.34",
  "slogan": "grow granular interfaces"
}, {
  "id": 30,
  "first_name": "Emelia",
  "last_name": "Gamett",
  "gender": "Non-binary",
  "age": 24,
  "ip_address": "122.143.22.160",
  "slogan": "enhance scalable technologies"
}, {
  "id": 31,
  "first_name": "Peyter",
  "last_name": "Pharaoh",
  "gender": "Male",
  "age": 21,
  "ip_address": "164.191.145.181",
  "slogan": "embrace dynamic eyeballs"
}, {
  "id": 32,
  "first_name": "Jonis",
  "last_name": "Jeanequin",
  "gender": "Female",
  "age": 26,
  "ip_address": "1.192.7.246",
  "slogan": "monetize viral web-readiness"
}, {
  "id": 33,
  "first_name": "Barbabas",
  "last_name": "Nuttall",
  "gender": "Male",
  "age": 43,
  "ip_address": "144.181.254.174",
  "slogan": "grow interactive e-markets"
}, {
  "id": 34,
  "first_name": "Ciro",
  "last_name": "Mockes",
  "gender": "Male",
  "age": 43,
  "ip_address": "64.114.121.201",
  "slogan": "aggregate extensible infomediaries"
}, {
  "id": 35,
  "first_name": "Robin",
  "last_name": "Jako",
  "gender": "Genderqueer",
  "age": 46,
  "ip_address": "231.18.44.223",
  "slogan": "transform interactive paradigms"
}, {
  "id": 36,
  "first_name": "Cassius",
  "last_name": "Lighten",
  "gender": "Male",
  "age": 46,
  "ip_address": "9.167.136.164",
  "slogan": "transition wireless communities"
}, {
  "id": 37,
  "first_name": "Mozes",
  "last_name": "Yanez",
  "gender": "Male",
  "age": 35,
  "ip_address": "159.231.6.81",
  "slogan": "enable robust portals"
}, {
  "id": 38,
  "first_name": "Lyman",
  "last_name": "St. Clair",
  "gender": "Male",
  "age": 16,
  "ip_address": "230.58.191.42",
  "slogan": "utilize open-source relationships"
}, {
  "id": 39,
  "first_name": "Brittan",
  "last_name": "Tunnicliffe",
  "gender": "Female",
  "age": 20,
  "ip_address": "112.215.227.250",
  "slogan": "strategize front-end partnerships"
}, {
  "id": 40,
  "first_name": "Cirilo",
  "last_name": "Pedro",
  "gender": "Male",
  "age": 23,
  "ip_address": "182.93.36.24",
  "slogan": "incubate ubiquitous web-readiness"
}, {
  "id": 41,
  "first_name": "Nial",
  "last_name": "MacAskie",
  "gender": "Male",
  "age": 16,
  "ip_address": "143.125.210.132",
  "slogan": "incubate best-of-breed infrastructures"
}, {
  "id": 42,
  "first_name": "Sansone",
  "last_name": "Caskie",
  "gender": "Male",
  "age": 37,
  "ip_address": "231.172.138.244",
  "slogan": "seize end-to-end experiences"
}, {
  "id": 43,
  "first_name": "Jase",
  "last_name": "MacMeeking",
  "gender": "Male",
  "age": 27,
  "ip_address": "239.61.235.221",
  "slogan": "deploy open-source technologies"
}, {
  "id": 44,
  "first_name": "Lisbeth",
  "last_name": "Klosser",
  "gender": "Female",
  "age": 20,
  "ip_address": "137.96.59.117",
  "slogan": "engineer 24/365 communities"
}, {
  "id": 45,
  "first_name": "Barbaraanne",
  "last_name": "D'Errico",
  "gender": "Female",
  "age": 24,
  "ip_address": "87.80.14.217",
  "slogan": "matrix clicks-and-mortar e-commerce"
}, {
  "id": 46,
  "first_name": "Stephi",
  "last_name": "Tankin",
  "gender": "Female",
  "age": 42,
  "ip_address": "185.186.157.136",
  "slogan": "enhance enterprise technologies"
}, {
  "id": 47,
  "first_name": "Shandy",
  "last_name": "Hefferan",
  "gender": "Female",
  "age": 30,
  "ip_address": "75.27.24.214",
  "slogan": "monetize impactful deliverables"
}, {
  "id": 48,
  "first_name": "Gustav",
  "last_name": "Harrow",
  "gender": "Male",
  "age": 33,
  "ip_address": "210.155.197.140",
  "slogan": "architect compelling eyeballs"
}, {
  "id": 49,
  "first_name": "Aube",
  "last_name": "Mansuer",
  "gender": "Male",
  "age": 33,
  "ip_address": "203.10.41.125",
  "slogan": "streamline dynamic synergies"
}, {
  "id": 50,
  "first_name": "Torin",
  "last_name": "Selvester",
  "gender": "Male",
  "age": 46,
  "ip_address": "61.107.8.165",
  "slogan": "monetize user-centric vortals"
}, {
  "id": 51,
  "first_name": "Verney",
  "last_name": "Gallichan",
  "gender": "Male",
  "age": 29,
  "ip_address": "27.109.143.14",
  "slogan": "embrace holistic deliverables"
}, {
  "id": 52,
  "first_name": "Cinderella",
  "last_name": "Urion",
  "gender": "Genderqueer",
  "age": 38,
  "ip_address": "1.37.24.98",
  "slogan": "extend revolutionary platforms"
}, {
  "id": 53,
  "first_name": "Kip",
  "last_name": "Abson",
  "gender": "Male",
  "age": 20,
  "ip_address": "58.90.115.82",
  "slogan": "syndicate innovative channels"
}, {
  "id": 54,
  "first_name": "Leroi",
  "last_name": "Bartoszek",
  "gender": "Male",
  "age": 40,
  "ip_address": "27.203.37.72",
  "slogan": "grow clicks-and-mortar content"
}, {
  "id": 55,
  "first_name": "Jereme",
  "last_name": "Pitrasso",
  "gender": "Male",
  "age": 17,
  "ip_address": "121.195.137.71",
  "slogan": "repurpose world-class mindshare"
}, {
  "id": 56,
  "first_name": "Barnebas",
  "last_name": "Todeo",
  "gender": "Male",
  "age": 23,
  "ip_address": "67.248.141.205",
  "slogan": "innovate transparent relationships"
}, {
  "id": 57,
  "first_name": "Marlyn",
  "last_name": "Kristoffersson",
  "gender": "Female",
  "age": 38,
  "ip_address": "85.173.212.50",
  "slogan": "revolutionize extensible platforms"
}, {
  "id": 58,
  "first_name": "Tina",
  "last_name": "Neno",
  "gender": "Female",
  "age": 34,
  "ip_address": "204.189.0.163",
  "slogan": "embrace clicks-and-mortar networks"
}, {
  "id": 59,
  "first_name": "Estella",
  "last_name": "Tiner",
  "gender": "Female",
  "age": 30,
  "ip_address": "4.4.160.2",
  "slogan": "incubate granular models"
}, {
  "id": 60,
  "first_name": "Dania",
  "last_name": "Chevalier",
  "gender": "Female",
  "age": 15,
  "ip_address": "153.98.102.174",
  "slogan": "syndicate back-end applications"
}, {
  "id": 61,
  "first_name": "Basile",
  "last_name": "Ribeiro",
  "gender": "Male",
  "age": 40,
  "ip_address": "226.131.7.157",
  "slogan": "unleash B2B e-services"
}, {
  "id": 62,
  "first_name": "Annamaria",
  "last_name": "Vlasyuk",
  "gender": "Female",
  "age": 19,
  "ip_address": "33.131.142.88",
  "slogan": "engineer magnetic ROI"
}, {
  "id": 63,
  "first_name": "Shane",
  "last_name": "MacRierie",
  "gender": "Male",
  "age": 28,
  "ip_address": "188.162.197.117",
  "slogan": "exploit wireless functionalities"
}, {
  "id": 64,
  "first_name": "Agretha",
  "last_name": "Veld",
  "gender": "Female",
  "age": 16,
  "ip_address": "116.150.108.64",
  "slogan": "implement interactive infrastructures"
}, {
  "id": 65,
  "first_name": "Solly",
  "last_name": "Peterkin",
  "gender": "Male",
  "age": 23,
  "ip_address": "118.206.105.69",
  "slogan": "synergize proactive networks"
}, {
  "id": 66,
  "first_name": "Tarra",
  "last_name": "Braidley",
  "gender": "Female",
  "age": 15,
  "ip_address": "2.55.250.172",
  "slogan": "integrate robust initiatives"
}, {
  "id": 67,
  "first_name": "Kordula",
  "last_name": "Mapp",
  "gender": "Female",
  "age": 24,
  "ip_address": "44.250.31.31",
  "slogan": "aggregate user-centric markets"
}, {
  "id": 68,
  "first_name": "Tedda",
  "last_name": "Gregoriou",
  "gender": "Female",
  "age": 37,
  "ip_address": "129.64.230.182",
  "slogan": "deliver back-end vortals"
}, {
  "id": 69,
  "first_name": "Letitia",
  "last_name": "Witherington",
  "gender": "Female",
  "age": 24,
  "ip_address": "255.224.122.218",
  "slogan": "incentivize dynamic partnerships"
}, {
  "id": 70,
  "first_name": "Mariellen",
  "last_name": "Tanguy",
  "gender": "Female",
  "age": 26,
  "ip_address": "5.204.18.4",
  "slogan": "mesh best-of-breed partnerships"
}, {
  "id": 71,
  "first_name": "Trent",
  "last_name": "Richin",
  "gender": "Male",
  "age": 21,
  "ip_address": "225.220.247.105",
  "slogan": "transform virtual e-markets"
}, {
  "id": 72,
  "first_name": "Marlo",
  "last_name": "Hruska",
  "gender": "Male",
  "age": 26,
  "ip_address": "109.203.187.191",
  "slogan": "reinvent revolutionary convergence"
}, {
  "id": 73,
  "first_name": "Stephie",
  "last_name": "Dilleston",
  "gender": "Female",
  "age": 43,
  "ip_address": "238.102.54.180",
  "slogan": "drive visionary bandwidth"
}, {
  "id": 74,
  "first_name": "Blinni",
  "last_name": "Gatch",
  "gender": "Female",
  "age": 31,
  "ip_address": "134.239.113.238",
  "slogan": "leverage B2C communities"
}, {
  "id": 75,
  "first_name": "Carena",
  "last_name": "O' Bee",
  "gender": "Female",
  "age": 26,
  "ip_address": "149.217.88.85",
  "slogan": "harness cross-platform models"
}, {
  "id": 76,
  "first_name": "Clyde",
  "last_name": "Soonhouse",
  "gender": "Male",
  "age": 44,
  "ip_address": "189.139.194.208",
  "slogan": "exploit intuitive metrics"
}, {
  "id": 77,
  "first_name": "Ignazio",
  "last_name": "Berrick",
  "gender": "Male",
  "age": 37,
  "ip_address": "102.57.156.62",
  "slogan": "disintermediate holistic networks"
}, {
  "id": 78,
  "first_name": "Sherlocke",
  "last_name": "Cauthra",
  "gender": "Male",
  "age": 34,
  "ip_address": "221.173.182.111",
  "slogan": "envisioneer enterprise technologies"
}, {
  "id": 79,
  "first_name": "Loren",
  "last_name": "Klejna",
  "gender": "Genderqueer",
  "age": 16,
  "ip_address": "91.232.147.201",
  "slogan": "scale impactful communities"
}, {
  "id": 80,
  "first_name": "Leland",
  "last_name": "Meryett",
  "gender": "Female",
  "age": 30,
  "ip_address": "92.122.231.135",
  "slogan": "syndicate value-added niches"
}, {
  "id": 81,
  "first_name": "Rinaldo",
  "last_name": "Duckers",
  "gender": "Male",
  "age": 19,
  "ip_address": "87.66.193.89",
  "slogan": "transition cross-media infomediaries"
}, {
  "id": 82,
  "first_name": "Melli",
  "last_name": "Outram",
  "gender": "Female",
  "age": 41,
  "ip_address": "45.60.129.139",
  "slogan": "envisioneer integrated platforms"
}, {
  "id": 83,
  "first_name": "Khalil",
  "last_name": "Rash",
  "gender": "Male",
  "age": 37,
  "ip_address": "35.248.126.233",
  "slogan": "e-enable dot-com platforms"
}, {
  "id": 84,
  "first_name": "Sigrid",
  "last_name": "Hurler",
  "gender": "Female",
  "age": 21,
  "ip_address": "92.248.92.215",
  "slogan": "matrix intuitive users"
}, {
  "id": 85,
  "first_name": "Jarid",
  "last_name": "Klousner",
  "gender": "Male",
  "age": 29,
  "ip_address": "44.38.4.163",
  "slogan": "expedite B2B deliverables"
}, {
  "id": 86,
  "first_name": "Korney",
  "last_name": "Guidera",
  "gender": "Female",
  "age": 37,
  "ip_address": "8.240.207.124",
  "slogan": "enhance wireless infrastructures"
}, {
  "id": 87,
  "first_name": "Burr",
  "last_name": "Macro",
  "gender": "Male",
  "age": 21,
  "ip_address": "227.65.132.127",
  "slogan": "leverage innovative supply-chains"
}, {
  "id": 88,
  "first_name": "Kaylil",
  "last_name": "Rand",
  "gender": "Female",
  "age": 36,
  "ip_address": "234.173.158.214",
  "slogan": "deliver scalable mindshare"
}, {
  "id": 89,
  "first_name": "Berna",
  "last_name": "MacFarland",
  "gender": "Female",
  "age": 37,
  "ip_address": "122.48.1.38",
  "slogan": "orchestrate front-end infomediaries"
}, {
  "id": 90,
  "first_name": "Aharon",
  "last_name": "Nyland",
  "gender": "Male",
  "age": 46,
  "ip_address": "54.37.167.90",
  "slogan": "recontextualize ubiquitous paradigms"
}, {
  "id": 91,
  "first_name": "Feodora",
  "last_name": "Ilive",
  "gender": "Bigender",
  "age": 19,
  "ip_address": "12.107.174.40",
  "slogan": "transition revolutionary initiatives"
}, {
  "id": 92,
  "first_name": "Hamish",
  "last_name": "Chislett",
  "gender": "Male",
  "age": 31,
  "ip_address": "204.254.139.89",
  "slogan": "redefine web-enabled e-tailers"
}, {
  "id": 93,
  "first_name": "Elmer",
  "last_name": "Palomba",
  "gender": "Male",
  "age": 34,
  "ip_address": "108.243.13.171",
  "slogan": "transition viral e-business"
}, {
  "id": 94,
  "first_name": "Salem",
  "last_name": "Moncreiff",
  "gender": "Male",
  "age": 41,
  "ip_address": "175.24.194.19",
  "slogan": "grow efficient partnerships"
}, {
  "id": 95,
  "first_name": "Debby",
  "last_name": "Brent",
  "gender": "Bigender",
  "age": 37,
  "ip_address": "144.149.135.125",
  "slogan": "synthesize seamless content"
}, {
  "id": 96,
  "first_name": "Mirabelle",
  "last_name": "Gravatt",
  "gender": "Female",
  "age": 41,
  "ip_address": "156.247.125.242",
  "slogan": "morph holistic vortals"
}, {
  "id": 97,
  "first_name": "Atlante",
  "last_name": "Sainz",
  "gender": "Female",
  "age": 29,
  "ip_address": "193.225.216.19",
  "slogan": "embrace interactive relationships"
}, {
  "id": 98,
  "first_name": "Hershel",
  "last_name": "Domerc",
  "gender": "Genderqueer",
  "age": 36,
  "ip_address": "129.234.153.81",
  "slogan": "transition robust niches"
}, {
  "id": 99,
  "first_name": "Arlena",
  "last_name": "Merveille",
  "gender": "Female",
  "age": 30,
  "ip_address": "164.65.127.158",
  "slogan": "orchestrate extensible partnerships"
}, {
  "id": 100,
  "first_name": "Ellynn",
  "last_name": "Moreside",
  "gender": "Female",
  "age": 28,
  "ip_address": "161.149.77.102",
  "slogan": "enable intuitive metrics"
}]

function compose(action, config) {
	return function(rawData) {
		const _workData = [...rawData]

		const { key, value, condition } = config
    const response = action(_workData, key, value, condition)
    return response
	}
}

function actionFilter(_workData, key, value, condition) {
  const acc = []
	const add = (elem) => acc.push(elem)

	for (const item in _workData) {
		switch (condition) {
			case 'equal': _workData[item][key] === value && add(_workData[item])
				break
			case 'notEqual': _workData[item][key] !== value && add(_workData[item])
				break
			case 'above': _workData[item][key] > value && add(_workData[item])
				break
			case 'less': _workData[item][key] < value && add(_workData[item])
				break
		}
	}
  return acc
}

const actionFilterConfig = {
	key: 'age',
	value: 30,
	condition: 'equal'
}

const filter = compose(actionFilter, actionFilterConfig)

const resultFilter = filter(data)//.every(data => data.age === 30) // we can chain here with .reduce or other Array methods

console.log(resultFilter)