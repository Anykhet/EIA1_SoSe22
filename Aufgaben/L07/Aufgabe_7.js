//Einwohnerzahl Länder//
const Europa22 = 750.58;
const Deutschland22 = 83.75;
const Deutschland12 = 80.84;
const Frankreich22 = 65.79;
const Frankreich12 = 63.73;
const Italien22 = 60.59;
const Italien12 = 59.73;
const Kroatien22 = 4.08;
const Kroatien12 = 4.30;
//Relativität Gesamtzahl zu EU//
const RelativDEzuEU = Deutschland22 / Europa22 * 100;
const RelativFRzuEU = Frankreich22 / Europa22 * 100;
const RelativITzuEU = Italien22 / Europa22 * 100;
const RelativKRzuEU = Kroatien22 / Europa22 * 100;
//Differrenz der Länder//
const DifferenzDE = Deutschland22 - Deutschland12;
const DifferenzFR = Frankreich22 - Frankreich12;
const DifferenzIT = Italien22 - Italien12;
const DifferentKR = Kroatien22 - Kroatien12;
//Wachstumsrate seit 2012//
const WachstumsrateDE12 = DifferenzDE / Deutschland22;
const WachstumsrateFR12 = DifferenzFR / Frankreich22;
const WachstumsrateIT12 = DifferenzIT / Italien22;
const WachstumsrateKR12 = DifferentKR / Kroatien22;
//console.log//
//DE//
console.log("Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022" + ":" + Deutschland22 + "Mio");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + RelativDEzuEU + "%");
console.log("Wachstumsrate seit 2012" + ":" + WachstumsrateDE12 + "%");
//FR//
console.log("Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022" + ":" + Frankreich22 + "Mio");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + RelativFRzuEU + "%");
console.log("Wachstumsrate seit 2012" + ":" + WachstumsrateFR12 + "%");
//IT// 
console.log("Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022" + ":" + Italien22 + "Mio");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + RelativITzuEU + "%");
console.log("Wachstumsrate seit 2012" + ":" + WachstumsrateIT12 + "%");
//KR//
console.log("Gesamtzahl Einwohnerinnen und Einwohner in Kroatien in 2022" + ":" + Kroatien22 + "Mio");
console.log("Relativ zu Gesamtzahl in der EU 2022" + ":" + RelativKRzuEU + "%");
console.log("Wachstumsrate seit 2012" + ":" + WachstumsrateKR12 + "%");
//# sourceMappingURL=Aufgabe_7.js.map