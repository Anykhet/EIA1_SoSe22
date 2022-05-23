//Einwohnerzahl Länder//
const EU22 = 750.58;
const EU12 = 440.55;
const DE22 = 83.75;
const DE12 = 80.84;
const FR22 = 65.79;
const FR12 = 63.73;
const IT12 = 59.73;
const IT22 = 60.59;
const KR22 = 4.08;
const KR12 = 4.30;
const Text1 = "Gesamtzahl Einwohnerinnen und Einwohner in";
const Text2 = "in 2022";
//Relativität Gesamtzahl zu EU//
const RelativDE = Math.abs((DE22 / EU22) * 100).toFixed(2);
const RelativFR = Math.abs((FR22 / EU22) * 100).toFixed(2);
const RelativIT = Math.abs((IT22 / EU22) * 100).toFixed(2);
const RelativKR = Math.abs((KR22 / EU22) * 100).toFixed(2);
//Differenz//
const DifferenzDE = Math.abs(DE22 - DE12).toFixed(2);
const DifferenzFR = Math.abs(FR22 - FR12).toFixed(2);
const DifferenzIT = Math.abs(IT22 - IT12).toFixed(2);
const DifferenzKR = Math.abs(KR22 - KR12).toFixed(2);
const DifferenzEU = Math.abs(EU22 - EU12).toFixed(2);
//wachstumsrate//
const WachstumsrateDE = Math.abs((DifferenzDE / DE22) * 100).toFixed(2);
const WachstumsrateFR = Math.abs((DifferenzFR / FR22) * 100).toFixed(2);
const WachstumsrateIT = Math.abs((DifferenzIT / IT22) * 100).toFixed(2);
const WachstumsrateKR = Math.abs((DifferenzKR / KR22) * 100).toFixed(2);
const WachstumsrateEU = Math.abs((DifferenzEU / EU22) * 100).toFixed(2);
//Funktionen//
function Europa() {
    document.getElementById("gesamt").innerHTML = EU22 + " Mio";
    document.getElementById("relativ").innerHTML = "100%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateEU + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzEU + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Europa " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + "100%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "1");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
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
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateDE + "%";
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
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzFR + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Frankreich " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (FR22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#kr").setAttribute("class", "wrapper");
}
function Italien() {
    document.getElementById("gesamt").innerHTML = IT22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativIT + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateIT + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzIT + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Italien " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (IT22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "active");
    document.querySelector("#kr").setAttribute("class", "wrapper");
}
function Kroatien() {
    document.getElementById("gesamt").innerHTML = KR22 + " Mio";
    document.getElementById("relativ").innerHTML = RelativKR + "%";
    document.getElementById("wachstumsrate").innerHTML = WachstumsrateKR + "%";
    document.getElementById("wachstumsrategesamt").innerHTML = DifferenzKR + " Mio";
    document.getElementById("Name").innerHTML = Text1 + " Kroatien " + Text2;
    document.querySelector(".chart").setAttribute("style", "height:" + (KR22 / EU22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5");
    document.querySelector("#de").setAttribute("class", "wrapper");
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#kr").setAttribute("class", "active");
}
//# sourceMappingURL=Aufgabe7.js.map