var firstNames= [
"Ding",
"Maud", 
"Uwert", 
"Meincice",
"Iovan",
"Oesgeese", 
"Loesse", 
"Wahler", 
"Menud", 
"Giselt", 
"Pawren", 
"Ellys", 
"Denys", 
"Orronomo", 
"Jhieng", 
"Direc", 
"Jiames", 
"Solomon", 
"Emilie", 
"Simone", 
"Giscard",
"Dickery", 
"Opsley", 
"Peesmake", 
"Eppington", 
"Slater", 
"Marmery", 
"Lockdell",
"Go-Whitting", 
"Chuckslee",
"Esthrev",
"Esther",
"Otti",
"Adounne",
"Abedinne",
"Dounia",
"Enegin",
];

var lastNames = [
"Tenderett",
"Botteng",
"Cardt",
"Clappard",
"Odding",
"Chand",
"Mudge",
"Smyde",
"Checkby",
"Sziler",
"Manhatte",
"Zaprude",
"Corsonne",
"Tesselmorn",
"Taschkend",
"Tacksmend",
"Haschkeer",
"Saranhada",
"Cassimentari",
"Bramavinder",
"Merrinderani",
"Morolentani",
"Stroodler",
"Dobier",
"Mayko",
"Kheirett",
"Abissenard",
"Cattabett",
"Castevets",
"Mitterance",
"Letherage",
"Tabbeyrand",
"Tarnymette",
"Manucort",
"Cortolaine",
"Kinnelauga",
"Laugesliega",
"Olaukine",
"Lemanute",
"Docking",
"Toal",
];

// pick uses math.random*the length of the array, rounded down by math.floor, to specify a random index for an array. It then returns the value at that index.

function pick (list) {
var result=list[Math.floor(Math.random()*list.length)];
return result;
};

/*const pick = (list) => {
let result=list[Math.floor(Math.random()*list.length)]
return result	
}
*/

//the character object is built by running pick for each list of character attributes and assigning them to the object.

var character={
	firstName: pick(firstNames),
	lastName: pick(lastNames),
	//*occupation: occupation,
	//age: age,
	//obsession: obsession,
	//starSign: starSign,*//
};


character.firstName+" "+character.lastName;