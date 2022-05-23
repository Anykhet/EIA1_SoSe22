// Arrays und Variablen//
var Sounds = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"),
    ("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"),
    ("./assets/snare.mp3")];
var beat = [Sounds[4], Sounds[5], Sounds[8]];
var zähler = 0;
//Funktionen// 
window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function playBeat() {
    setInterval(function () {
        playSample(beat[zähler]);
        zähler++;
        if (zähler === 3) {
            zähler = 0;
        }
    }, 500);
}
function addClickListenersDrumPad() {
    document.querySelector(".pad-1").addEventListener("click", function () { playSample(Sounds[0]); });
    document.querySelector(".pad-2").addEventListener("click", function () { playSample(Sounds[1]); });
    document.querySelector(".pad-3").addEventListener("click", function () { playSample(Sounds[2]); });
    document.querySelector(".pad-4").addEventListener("click", function () { playSample(Sounds[3]); });
    document.querySelector(".pad-5").addEventListener("click", function () { playSample(Sounds[4]); });
    document.querySelector(".pad-6").addEventListener("click", function () { playSample(Sounds[5]); });
    document.querySelector(".pad-7").addEventListener("click", function () { playSample(Sounds[6]); });
    document.querySelector(".pad-8").addEventListener("click", function () { playSample(Sounds[7]); });
    document.querySelector(".pad-9").addEventListener("click", function () { playSample(Sounds[8]); });
    document.querySelector(".play").addEventListener("click", function () { playBeat(); });
}
//# sourceMappingURL=Aufgabe8.js.map