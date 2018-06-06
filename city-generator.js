

function cityGenerate(){

var governmentBuildings = [

"A beadlery Tower",
"The Leaswyte Tariff Office and Liquor exchange",
"Drander's Corn Exchange",
"Tiptoncel's Grocery Market and Seed Exchange",
"The Divisional Harbour Master's",
"Hausmann's Home for Returned Sailors and Merchant Venturers",
"Clumorgan Castle, containing the Royal Mint",
"Haesewick Fort and the Office of the Second Adjutant to the Combined Forces",
"Fort Maesmarch, home of the Divisional Court of Manners",
"Fenwicke Fort, Office of the Estates General",
"Caetes Hall, Office of the Council of Parleys and the Royal Treaty Office",
"Combes Poorhouse",
"Hillwark Gaol",
"The Municipal Charterhouse of Turners, Sawyers and Carpenters",
"Saives Prison",
"Meeselritter Tower, oContaining the Office of Meteorological Forecasts and the Department for Astrological Research.",
"The public reserve cistern and municipal pumping waterworks",
"The Divisional Insurance Registry and Shipping interchange",
"The Municipal Canal Cleaners Workshop and Dredgers Drydock",
"Royal Gold & Silver Exchange",
"The Divisional Naval Drydock and Closed Graving Yard",
"The Heldeswater Memorial Poorhouse",
"Ompere's Infirmary",
"The Onlylle Memorial Hospital",
"The Dorvee Hospital for Returned Soldiers",
"The Municipal Morgue and Teaching Hospital.",
"Office for the Divisional Medical Inspectory",
"The Armory Royal",
"Deaconry House, Office of The Clerk Regnant and Master of Records to the Royal Court of Closed Matters",
"Army and Navy House",
"The Chanchette Divisonal Courts of Contest",
"Excise House",
"Maywark Lodge, Office of the Clerk of Customs and Excise",
"The Divisional Tax Warehouse and Bond Store",
"Municipal Granary and Office of The Baker General",
"Rolls House",
"The Divisional Inspectorate of Schools and Prisons",
"Dorfdown MAnse, Office of the Divisional Inspectorate of Fisheries and Captain-General of the Coastguard",
"The Royal Office of Stamps and Seals, Office of the Postmistress in Ordinary",
"The Departmental Inspectorate of Livestock",
"The Municipal Labour Exchange and Union Registry",
"The Transportation Exchange for  the Upper Canal and Cope River",
"Sewell's Poorhouse and Soup Kitchen",
"The Houses of the Divisional Chancel, Office of the First Speaker to the Court, Board of Appeals.",
"Craddock's Hospital and Poor Ward",
"Lukewing's House for the Aged and Indigent",
"The Millwood Prison for the Unrepentantly Criminal and Wicked",
"The Municipal Orphan and Foundling Dormitory, Office for Experimentation in the Progress of Child Development and Modes of Education",
"Retys Lodge, Registry for Offices of Profit under the Crown",
"Lowrend Manse, Seat for The Court of Final Appeals and The Deputy of Exclusions",
]

var commercialBuildings = [

"Church & Stretton's Emporium of Imported Goods",
"Erbolli's, The Undertakers",
"Loudender's Herbery",
"Miccal's Fine Furnitures",
"Owel's Carrier Yard",
"Guadirao's Chocolate Works",
"Morrimotto & Derryn's Wiggery and Powder Merchants",
"Botton's Lumber Yard",
"Makariz Bakery",
"Du Lienn's, the Auctioneers",
"Teilher & Trenchers, Dealers in Art",
"Mandorin's Soap and Oil Market",
"Cabelle's Bank",
"Sightswell's Corn Dealers",
"Cobboliero's Bank",
"Dorvey & Founder's, Traders in Ice and Mineralled Waters",
"Layborne's Corpse Winders",
"Whole Grains and Leaf Bales for Sale",
"Werdley's Fine Embroiderers",
"The Empire Drapery",
"Garrick and Bros. Cobblers",
"Gassman's, The Tailors",
"Fine Leather Goods by De Wincee",
"Robuchant's Rare Bones",
"Terley's Ironmongery",
"Wedley's Medical Corpse Traders",
"Old Shepherd's Market",
"The Lower Branchwood Flower Exchange",
"Jeanne Free's Wheat Merchants",
"Medical Goods for Cheap by Honest Doctor Lucie",
"Neerdon's Used Corset Exchange",
"Wedding Hats by Poudrain",
"Ghiernae's Jeweled Caskets",
"Funeral Shrouds and Curtain's By Julie Frenk",
"Catsmeat and Dogsmeat Good and Ready, Proprietor Justine Derrie",
"Robin's Pawnbroker and Exchange",
"Borbierro, The Pawnbrokers",
"Fine Wines of La Rhenc and Du Tropf",
"Ysoille Meats, Preserved and Fresh",
"Hetwick and Daughters' Butchery",
"Menwas Fishmongery",
"Keller's Mussels and Pippys Fresh and Cooked",
"Jurie's Acorns and Chestnuts fresh cooked and crisp!",
"'Rare Coins, Medals and Insignia Bought and Gold Traded in' Fionn Hertford Proprietor.",
"Urdown's Cloth Cutters",
"Letsbee and Sons Sausage Sellers",
"Oldwood's Salt Sellers",
"Indoe's Trouser Shop",
"Shirts and Coats by Mme. Laurelle",
"Juliet Carpp's Ocular and Auditory Contrivances",
"Justwynne's Decorative and Wrapping Papers",
"Old Monsieur Jeep's Magical curiosities",
]

var culturalInstitutions = [

"The Renllaw Library",
"The Clove House Foundation",
"Goodfellow's Hall",
"The Trading Office and Editrial Headquarters of the Universal Register of Shipping",
"The Editorial Office of Mousewood's Review",
"The Headquarters for Tobin's Review and Syllabary",
"Tirponnen's Theatre",
"The Eppington Academy of the Useless Arts",
"Dees Branch Infant School",
"Dees Branch Poor Scool",
"Northweir Academy House",
"Dennehy's School for Indigent Boys",
"The Digby-Wood Institution for the Training of Mapmakers and Draftwrights",
"Our Duchess of Hertfree's Institution for the Study of Natural History",
"Ashwood's School for Ancient and Foreign Studies",
"Portwright's School for Haberdashers",
"Duyling's School for Cooks",
"The Indepedent Academy for the Languages and Noble Arts",
"Stowe and Daughters, Printers and Publishers",
"Selburn's, The Booksellers",
"The Fondiglioni Gallery and Salon",
"Bloomer's Poetry Press",
"Courtney's Fine Pictures",
"Blousegirt's Independent School for Infants",
"The Day school of Mme. Forgue",
"The Mawkmense Botanical Specimen Gallery",
"Piet Da Mor's Fossil and Stone Traders",
"Soame's Museum of Crime and Error",
"The Lettered Society of Geological Explorers",
"The Scoiety for the Study of Foreign Customs",
"Loofert House, Office for Society of Linguistic Translators",
"The Palace of Practical Enginery",
"The Municipal Academy of Journeying Tailors",
"The Derwent School for Machine Grinders and Engine Tenders",
"Poirre Castle, containing The Royal Academy of Naval Artillery",
"Terse Castle, Containing the Royal Cavalry Officer Training Grounds",
"The Society for the Advancement of Decorative Pottery",
"The Naine Gallery of Ceramic Art",
"The Headquarters of The Free Society for the Advancement of Natural Philosophy",
"Brompton's Oratory and Poetical Society",
"Furton's Musical Theatre Rooms",
"Grantkin's Dancing School and Ballroom",
"The Academy Gallery of the Society for the Advancement of Textile Arts",
"The Royal Institution for the Refinement of Computational Philosophy",
"Deakin's Taxidermical Miscellenarium",
"Headquarters of the Corresponding Society for the Abolition of Indentured Service",

]

var industrialSites = [

"The Benet Allen Soapworks",
"Bebe and Wosters, The Gin Boilers",
"Seesgitty's Dye Works",
"The Municipal Tramways Workshop and Asphalt Brewery",
"Borbierro's Carriage Works",
"Cober & Lees Flour Mill",
"Carters Circle",
"The Keidmorton Foundry",
"Lestersbeeg and Soffe's Cheeseworks",
"Veera's Soda Panners",
"Morsmans Ironworks",
"Toncel and Tipton's Chocolate Works",
"Jiame, du Bourg and Argiune' Tarworks and Dye Boilers",
"Walken's Tannery",
"Ranger and Daughters Paintworks",
"Pickles Leadworks and Fancy Iron Benders",
"Golvizt Quicksilver Refiners",
"Powdon's Coal Press",
"Hywyte's Gravel Crushers",
"Loppe's Slateworks and Brickery",
"Killwood's Paving Graders",
"The Dees Branch Tannery",
"The Dees Branch Firewood Exchange",
"The Municipal Slaughterhouse",
"The Divisional Barley Grinding House",
"Hyjane's Gravel Sorters",
"The Glue Works of Mme. Dufflee",
"Lemyn's Gunpowder and Blasting Supplies",
"Verry's Bird Pottery and Canners",
"Dyer's Fish Cannery",
"Gherlyn's Fruit Mincery",
"Uike's Dyers and Cloth Cutters",
"Tercel's Weavery",
"The Linen Works of the worshipful company of clothworkers",
"Pollard's Peanut Pressers",
"Zerdon's Linseed Works",
"Suddlee's Wighair Sorters",
"Yuval's Juteworks",
"Erdorf's Cotton Sortinghouse",
"Soda Crushing Works",
"Orvenbender's Jute Stretching House",
"M. Niesseden's Ink Refinery",
"Lobelle's Printery",
"Gherlain's Paper Press",
"Dapperey'sWood Reducing House",
"Rett's Turpentine Boilery",
"Tar Fining Pits",
"Hopoto's Plank Cutter's",
"Huguenere's Lumber Yard",
"The Coking Yard of Mme. Laforgue",
"Ms. Deete's Aphalt Boilery",
"Foiree's Calico Weavery",
]

var publicHouses = [

"Lamplighters House",
"Tergard's Pension and Travelers' Rest",
"Casino Merrimille",
"The Plowmans Rest",
"The Queen's Boot",
"The Deacon's Hat ",
"The Cheeseman's Fancy",
"The Scholar's Buttonhole",
"Cafeteria de Witt",
"The Roughley (a coffee House)",
"The Beadle's Mark (a coffee House)",
"The Bear at Bay (a coffee House)",
"The Periwinkle (a coffee House)",
"The Anenome (a coffee House)",
"The Nasturtium Bank (a coffee House)",
"The Town Club",
"The Bank Club",
"The Exchange Club",
"Dorian's Fryery",
"The Sallington Club",
"The Diablerie Club",
"The Wheel of Chance",
"The Swan and Beadle",
"Sauvoy's Hostel",
"The Drunken Deacon",
"Bolton's Eating House",
"Brae and Downes Beerhall",
"The Duchess of Graves Club",
"The Socirty of Merchant Venturers Eating House",
"Bolton's Eating House",
"Brae and Downes Beerhall",
"The Dead Lion",
"The Jack of No Trades",
"The Communard",
"The Dead Tailor",
"The Weaver's Grief",
"The Westhithe Arms",
"The Fen Girl's Drum",
"The King of Porlonne",
"The Blind Weaver",
]

var streetNames = [
"Pursemein Close",
"Gerstymine Viaduct",
"Hillies Bridge",
"Ubert Bridge",
"Kiesluv Bridge",
"Meheph Bridge",
"Graving Dock",
"Barley Dock",
"Corn Dock",
"Lees Dock",
"Marble Dock",
"Tar Dock",
"Raeth Barren",
"Ystmere Fen",
"Slooping Dock",
"Upper Granary Wharf",
"Lower Granary wharf",
"Northweir Bridge",
"Meesemeier Course (Bridge)",
"Gin Street",
"Temple Square",
"Wimpole Gate",
"Tennyrood's Gate",
"Warden's Gate",
"Coal Gate",
"Privy Gate",
"Greenwood Alley",
"Bankbrick Close",
"Barbury Walk",
"Sudworth Lane",
"Ham Road",
"Pie Lane",
"Brickwalk Close",
"Hanger's Walk",
"Deed Street",
"Fleetwood Road",
"Rail Street",
"Works Lane",
"Black Square",
"Charterhouse Square",

]

var crossStreetNames = [

"Sudde Street",
"Cheese Street",
"Commune Place",
"Cherrytree Walk",
"Kettle Road",
"Mapmaker Close",
"Taylors Common",
"Farder's Loop",
"Worrall Lane",
"South Street",
"East Street",
"River Road East",
"River Road North",
"Chancel Lane",
"Court Street",
"Doctor's Common",
"Devyl Street",
"Peverrell Lane",
"Dansey's Close",
"Soapmaker's Terrace",
"The Parade",
"Farrer Terrace",
"Wellfare Terrace",
"Bread Street",
"Senechal Lane",
"Whitelamb Terrace",
"Horse Lane",
"Wolff Street",
]


var parks = [

"Derryn Gardens",
"Chase Dellyn Park",
"The Municipal Wasteground and Disposery",
"Summersbank Gardens",
"Cheerywood Walk",
"Lower Peacemaeke Course",
"Southwesterly Dog Park",
"Park Green",
"Primrose Park",
"Eastcheap Park",
"Tower Walk",
"Tower Park",
"The Dene Garden",
"Rosewood Lawn",
"The Blossom Copse by the Statue of Jhiang Febre",
"Primrose Hill",
"The Pottery Hill",
"Sloughdon Park",
"Lambs Park",
"THe Old Driving Ground",
"Shinart Tower",
"Danaan House",
"Balle Manse",
"Carnach College",
"Sainswerres Castle",
"Shorwell House",
"Wynterhalter Place",
"Bambretch Mansion",
"Cowesthorn Keep",
"The Needles",
"Brading Hall",
"Mme. Dunsey's Town House",
"Applecombe Chanse",
"The Wisterias",
"Three Gables",
"Doorstock Towers",
"Leaholt Down",
"Shanklin Lodge",
"M. Regatt's Town House",
"Farforde Cliffe",
"Wulfketel Place",
"Chirner Cliffe Lawns",
"The Chery Orcard at Chinne Place",
"The Elederflower Orchard behind Mme. Pender's Residence",
"Duchess Penry's Rose Garden",
"Viscount Serelson's Town House",
"M. Bardsley's Hedge Maze.",
"The formal Walks of Blacksware Tower",
"Tne Pocket Observatory Neatsfoote Place",

]

var oddments = [
"Freeswain House",
"Buryham House",
"Hay House",
"Stagwent Place",
"The Duke of Greyborne'sw",
"Blousefield Manse",
"The Tower",
"Lemon's Hill Castle",
"Huff's Keep",
"Dertly House",
"The Marquis of Jewdorn's Winter House",
"Society for the Blessed Graces",
"Fellowship of The Morning and The Dusk",
"Wiorshipful Company of Turners' Singing House",
"Poor Brothers' Meeting House",
"Children of the Blessed Moon",
"The Chanters' Terrace by the Brae Creek",
"The Cemetery of Monkswood Quarter",
"The Criminal and Paupers Graveyard",


]

//pick is a function that picks an item from an array by multiplying its length by math.random and then rounding it down using math.floor, then using this number as an index for the list.

function pick (list) {
var result=list[Math.floor(Math.random()*list.length)];
return result;
};

var listTypes = [
publicHouses,
commercialBuildings,
governmentBuildings,
publicHouses,
commercialBuildings,
industrialSites,
publicHouses,
];


//defining the type of location at each map grid point
var number1listType = pick(listTypes)
var number2listType = pick(listTypes)
var number3listType = pick(listTypes)
var number4listType = pick(listTypes)
var number5listType = pick(listTypes)
var number6listType = pick(listTypes)
var number7listType = pick(listTypes)
var number8listType = pick(listTypes)
var number9listType = pick(listTypes)
var number10listType = pick(listTypes)
var number11listType = pick(listTypes)
var number12listType = pick(listTypes)
var number13listType = pick(listTypes)
var number14listType = pick(listTypes)
var number15listType = pick(listTypes)
var number16listType = pick(listTypes)
var number17listType = pick(listTypes)
var number18listType = pick(listTypes)
var number19listType = pick(listTypes)
var number20listType = pick(listTypes)
var number21listType = pick(listTypes)
var number22listType = pick(listTypes)
var number23listType = pick(listTypes)
var number24listType = pick(listTypes)
var number25listType = pick(listTypes)
;

var streetResult = {

streetName: pick(streetNames),
number1: pick(number1listType),
number2: pick(number2listType),
number3: pick(number3listType),
number4: pick(number4listType),
number5: pick(number5listType),
number6: pick(number6listType),
number7: pick(number7listType),
number8: pick(number8listType),
number9: pick(number9listType),
number10: pick(number10listType),
number11: pick(number11listType),
number12: pick(number12listType),
number13: pick(number13listType),
number14: pick(number14listType),
number15: pick(number15listType),
number16: pick(number16listType),
number17: pick(number17listType),
number18: pick(number18listType),
number19: pick(number19listType),
number20: pick(number20listType),
number21: pick(number21listType),
number22: pick(number22listType),
number23: pick(number23listType),
number24: pick(number24listType),
number25: pick(number25listType),
corner1: pick(crossStreetNames),
corner2: pick(crossStreetNames),
corner3: pick(oddments),
park: pick(parks),
};

document.getElementById("streetName").innerHTML = streetResult.streetName;
document.getElementById("number1").innerHTML = streetResult.number1;
document.getElementById("number2").innerHTML = streetResult.number2;
document.getElementById("number3").innerHTML = streetResult.number3;
document.getElementById("number4").innerHTML = streetResult.number4;
document.getElementById("number5").innerHTML = streetResult.number5;
document.getElementById("number6").innerHTML = streetResult.number6;
document.getElementById("number7").innerHTML = streetResult.number7;
document.getElementById("number8").innerHTML = streetResult.number8;
document.getElementById("number9").innerHTML = streetResult.number9;
document.getElementById("number10").innerHTML = streetResult.number10;
document.getElementById("number11").innerHTML = streetResult.number11;
document.getElementById("number12").innerHTML = streetResult.number12;
document.getElementById("number13").innerHTML = streetResult.number13;
document.getElementById("number14").innerHTML = streetResult.number14;
document.getElementById("number15").innerHTML = streetResult.number15;
document.getElementById("number16").innerHTML = streetResult.number16;
document.getElementById("number17").innerHTML = streetResult.number17;
document.getElementById("number18").innerHTML = streetResult.number18;
document.getElementById("number19").innerHTML = streetResult.number19;
document.getElementById("number20").innerHTML = streetResult.number20;
document.getElementById("number21").innerHTML = streetResult.number21;
document.getElementById("number22").innerHTML = streetResult.number22;
document.getElementById("number23").innerHTML = streetResult.number23;
document.getElementById("number24").innerHTML = streetResult.number24;
document.getElementById("number25").innerHTML = streetResult.number25;
document.getElementById("corner1").innerHTML = streetResult.corner1;
document.getElementById("corner2").innerHTML = streetResult.corner2;
document.getElementById("corner3").innerHTML = streetResult.corner3;
document.getElementById("park").innerHTML = streetResult.park;

};
cityGenerate()