//Variablen //
var punkte = 0;
var anzahlSaetze = 0;
var gemischterSpanischerSatz;
var satz = null;
//Sätze//
var saetze = [
    {
        satzSP: "Yo llamo Aanya.".split(" "),
        satzDE: "ich bin Aanya.".split(" "),
    },
    {
        satzSP: "El zumo de manzane, por favor.".split(" "),
        satzDE: "den Apfelsaft bitte.".split(" "),
    },
    {
        satzSP: "¿Cómo estas?".split(" "),
        satzDE: "Wie geht's dir?".split(" "),
    },
    {
        satzSP: "Yo no hablo espanol".split(" "),
        satzDE: "Ich spreche kein Spanisch.".split(" "),
    },
    {
        satzSP: "Encantado de conocerte.".split(" "),
        satzDE: "Es freut mich dich kennenzulernen.".split(" "),
    },
    {
        satzSP: "¿Cuánto tiempo tardaré?".split(" "),
        satzDE: "Wie lange wird es brauchen?".split(" "),
    },
    {
        satzSP: "Necesito ir al médico.".split(" "),
        satzDE: "Ich brauche einen Arzt.".split(" "),
    },
    {
        satzSP: "¿Cuánto cuesta?".split(" "),
        satzDE: "Was kostet das?".split(" ")
    },
    {
        satzSP: "¿Qué hora es?".split(" "),
        satzDE: "Wie spät ist es?".split(" ")
    },
    {
        satzSP: "Estoy bien.".split(" "),
        satzDE: "Mir geht es gut.".split(" ")
    },
    {
        satzSP: "¿Hablas alemán?".split(" "),
        satzDE: "Sprechen Sie Deutsch?".split(" "),
    },
    {
        satzSP: "La playa es preciosa.".split(" "),
        satzDE: "Der Strand ist wunderschön.".split(" "),
    },
    {
        satzSP: "¿Cómo llego al mar?".split(" "),
        satzDE: "Wie komme ich ans Meer?".split(" "),
    },
    {
        satzSP: "Mañana volamos a casa.".split(" "),
        satzDE: "Morgen fliegen wir nach Hause.".split(" "),
    },
    {
        satzSP: "Vielen Dank für Ihre Gastfreundlichkeit.".split(" "),
        satzDE: "Gracias por su hospitalidad.".split(" "),
    },
];
//Funktion für den Shuffle der Wörter
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(saetze);
window.addEventListener("load", function () {
    console.log("start");
    var schwierig = document.getElementById("schwierigkeit");
    var spiel = document.getElementById("aufgaben");
    var ende = document.getElementById("endstand");
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
    document.getElementById("neustart").onclick = function () {
        neustart();
    };
    function wortKlick(wort) {
        var richtigeWörter = document.getElementById("wörterRichtig").childElementCount;
        if (wort == saetze[satz].satzSP[richtigeWörter]) {
            var span = document.createElement("span");
            span.classList.add("richtigesWort");
            span.innerHTML = wort;
            document.getElementById("wörterRichtig").appendChild(span);
            punkte = punkte + 1;
            for (var i = 0; i < gemischterSpanischerSatz.length; i++) {
                if (gemischterSpanischerSatz[i] == wort) {
                    gemischterSpanischerSatz.splice(i, 1);
                }
            }
            document.getElementById("satzSP").innerHTML = "";
            for (var i = 0; i < gemischterSpanischerSatz.length; i++) {
                let wort = document.createElement("span");
                wort.classList.add("wort");
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
            wort.classList.add("wort");
            wort.onclick = function () {
                wortKlick(wort.innerHTML);
            };
            wort.innerHTML = spanisch[i];
            document.getElementById("satzSP").appendChild(wort);
        }
        document.getElementById("satz").innerHTML = satz + 1 + " / " + anzahlSaetze;
        if (satz == anzahlSaetze) {
            spiel.classList.add("versteckt");
            ende.classList.remove("versteckt");
            document.getElementById("punkteGesamt").innerHTML = punkte + " Punkte!";
        }
    }
    function neustart() {
        punkte = 0;
        document.getElementById("punktestand").innerHTML = punkte + " Punkte!";
        anzahlSaetze = 0;
        satz = null;
        ende.classList.add("versteckt");
        schwierig.classList.remove("versteckt");
    }
});
//# sourceMappingURL=Endabgabe.js.map