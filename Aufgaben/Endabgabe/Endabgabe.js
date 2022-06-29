var schwierig = document.getElementById("schwierigkeit");
var spiel = document.getElementById("aufgaben");
var ende = document.getElementById("endstand");
var punkte = 0;
var anzahlSaetze = 0;
var gemischterSpanischerSatz;
var satz = null;
var saetze = [
    {
        satzSP: "Yo llamo Aanya. ".split(" "),
        satzDE: "ich bin Aanya.".split(" ")
    },
    {
        satzSP: "El zumo de manzane, por favor.".split(" "),
        satzDE: "den Apfelsaft bitte.".split(" ")
    },
    {
        satzSP: "¿Cómo estas?.".split(" "),
        satzDE: "Wie gehts dir?.".split(" ")
    },
    {
        satzSP: "Yo no hablo espanol".split(" "),
        satzDE: "Ich spreche kein Spanisch.".split(" ")
    },
    {
        satzSP: "Encantado de conocerte.".split(" "),
        satzDE: "Es freut mich dich kennezulernen.".split(" ")
    },
    {
        satzSP: "¿Cuánto tiempo tardaré?".split(" "),
        satzDE: "Wie lange wird es brauchen?".split(" ")
    },
    {
        satzSP: "Necesito ir al médico.".split(" "),
        satzDE: "Ich brauche einen Arzt.".split(" ")
    },
    {
        satzSP: "¿De dónde es?".split(" "),
        satzDE: "Woher kommst du?".split(" ")
    },
    {
        satzSP: "He tenido un accidente con el coche.".split(" "),
        satzDE: "Ich habe einen Unfall mit dem Auto gehabt.".split(" ")
    },
    {
        satzSP: "Me gusta escuchar musica.".split(" "),
        satzDE: "Ich höre gerne Musik.".split(" ")
    },
    {
        satzSP: "Picasso puende pintar bien.".split(" "),
        satzDE: "Picasso kann gut malen.".split(" ")
    },
    {
        satzSP: "Me gusta mucho el color verde.".split(" "),
        satzDE: "Ich mag die Farbe grün sehr gerne.".split(" ")
    },
    {
        satzSP: "¿Que color te gusta?".split(" "),
        satzDE: "Welche Farbe magst du gerne?".split(" ")
    },
    {
        satzSP: "¿Tiennes una mascota?".split(" "),
        satzDE: "Hast du ein Haustier?".split(" ")
    },
    {
        satzSP: "El cielo es azul.".split(" "),
        satzDE: "Der Himmel ist blau.".split(" ")
    },
];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(saetze);
spiel.classList.add("versteckt");
ende.classList.add("versteckt");
document.getElementById("leicht").onclick = function () {
    anzahlSaetze = 5;
    schwierig.classList.add("versteckt");
    spiel.classList.remove("versteckt");
    neuerSatz();
};
document.getElementById("mittel").onclick = function () {
    anzahlSaetze = 10;
    schwierig.classList.add("versteckt");
    spiel.classList.remove("versteckt");
    neuerSatz();
};
document.getElementById("schwer").onclick = function () {
    anzahlSaetze = 15;
    schwierig.classList.add("versteckt");
    spiel.classList.remove("versteckt");
    neuerSatz();
};
function wortKlick(wort) {
    var richtigeWörter = document.getElementById("wörterRichtig").childElementCount;
    if (wort == saetze[satz].satzSP[richtigeWörter]) {
        var span = document.createElement("span");
        span.innerHTML = wort;
        document.getElementById("wörterRichtig").appendChild(span);
        punkte = punkte + 1;
        for (var i = 0; i < gemischterSpanischerSatz.length; i++) {
            if (gemischterSpanischerSatz[i] == wort) {
                gemischterSpanischerSatz.splice(i, 1);
            }
        }
        document.getElementById("satzSP").innerHTML = "";
        for (var i = 0; i < gemischterSpanischerSatz.lenght; i++) {
            let wort = document.createElement("span");
            wort.innerHTML = gemischterSpanischerSatz[i];
            wort.onclick = function () {
                wortKlick(wort.innerHTML);
            };
            document.getElementById("satzSP").appendChild(wort);
        }
        if (richtigeWörter == saetze[satz].satzSP.length - 1)
            neuerSatz();
    }
    else {
        alert("Falsches Wort");
        if (punkte > 0)
            punkte = punkte - 1;
    }
    document.getElementById("punktestand").innerHTML = punkte + " Punkte!";
}
function neuerSatz() {
    document.getElementById("satzDE").innerHTML = "";
    document.getElementById("satzSP").innerHTML = "";
    document.getElementById("wörterRichtig").innerHTML = "";
    if (satz == null)
        satz = 0;
    else
        satz = satz + 1;
    document.getElementById("satzDE").innerHTML = saetze[satz].satzDE.join(" ");
    var spanisch = [...saetze[satz].satzSP];
    shuffleArray(spanisch);
    gemischterSpanischerSatz = spanisch;
    for (var i = 0; i < spanisch.length; i++) {
        let wort = document.createElement("span");
        wort.onclick = function () {
            wortKlick(wort.innerHTML);
        };
        wort.innerHTML = spanisch[i];
        document.getElementById("satzSP").appendChild(wort);
    }
    document.getElementById("satz").innerHTML = satz + " / " + anzahlSaetze;
    if (satz == anzahlSaetze) {
        spiel.classList.add("versteckt");
        ende.classList.remove("versteckt");
        document.getElementById("punkteGesamt").innerHTML = punkte + " Punkte!";
    }
}
//# sourceMappingURL=Endabgabe.js.map