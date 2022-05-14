//Einwohnerzahl Länder//
const EU22 = 750.58;
const EU12 = 440.55;
const DE22 = 83.75;
const DE12 = 80.84;
const FR22 = 65.79;
const FR12 = 63.73;
const IT22 = 60.59;
const IT12 = 59.73;
const KR22 = 4.08;
const KR12 = 4.30;
const Text1 = "Gesamtzahl Einwohnerinnen und Einwohner in";
const Text2 = "in 2022";
//Relativität zu EU//
const RelativDE = Math.abs((DE22 / EU22) * 100).toFixed(2);
const RelativFR = Math.abs((FR22 / EU22) * 100).toFixed(2);
const RelativIT = Math.abs((IT22 / EU22) * 100).toFixed(2);
const RelativKR = Math.abs((KR22 / EU22) * 100).toFixed(2);
//Differenz der Länder//
const DifferDE = Math.abs(DE22 - DE12).toFixed(2);
const DifferFR = Math.abs(FR22 - FR12).toFixed(2);
const DifferIT = Math.abs(IT22 - IT12).toFixed(2);
const DifferKR = Math.abs(KR22 - KR12).toFixed(2);
const DifferEU = Math.abs(EU22 - EU12).toFixed(2);
//Wachstumsrate seit 2012//
const WachstumsrateDE = Math.abs((DifferDE / DE22) * 100).toFixed(2);
const WachstumsrateFR = Math.abs((DifferFR / FR22) * 100).toFixed(2);
const WachstumsrateIT = Math.abs((DifferIT / IT22) * 100).toFixed(2);
const WachstumsrateKR = Math.abs((DifferKR / KR22) * 100).toFixed(2);
const WachstumsrateEU = Math.abs((DifferEU / EU22) * 100).toFixed(2);
//Funktionen// 
function Europa() {
    document.getElementById("gesamt").innerHTML = EU22 + " Mio";
    document.getElementById("relativ").innerHTML = "100%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateEU + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferEU + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Europa " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + "100%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "1");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#kr").setAttribute("class", "wrapper");
}
window.addEventListener("load", function () {
    document.querySelector(".chartStarWrapper").addEventListener('click', Europa);
    document.querySelector(".germany").addEventListener('click', Deutschland);
    document.querySelector(".france").addEventListener('click', Frankreich);
    document.querySelector(".italy").addEventListener('click', Italien);
    document.querySelector(".croatia").addEventListener('click', Kroatien);
});
function Deutschland() {
    document.getElementById("gesamt").innerHTML = DE22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativDE + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateDE12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzDE + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Deutschland " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (DE22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "active");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#kr").setAttribute("class", "wrapper");
}
function Frankreich() {
    document.getElementById("gesamt").innerHTML = FR22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativFR + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateFR + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferFR + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Frankreich " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (FR22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}
function Italien() {
    document.getElementById("gesamt").innerHTML = IT22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativIT + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateIT + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferIT + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Italien " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (IT22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "active");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}
function Kroatien() {
    document.getElementById("gesamt").innerHTML = KR22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativKR + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateKR + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferKR + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Kroatien " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (KR22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "active");
}
//# sourceMappingURL=Aufgabe7.js.map