// Arrays und Variablen//

var Sounds: string [] = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"), 
("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"), 
("./assets/snare.mp3")];

var beat: string []= [Sounds [4], Sounds [5], Sounds [8]];

var zähler: number = 0;



//Funktionen// 

window.addEventListener("load", addClickListenersDrumPad);

function playSample(soundQuelle: string): void {
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zähler]);
        zähler ++;
        if (zähler === 3) {
            zähler = 0;
        }
    }, 500);
}

function addClickListenersDrumPad(): void {

document.querySelector(".pad-1").addEventListener("click", function(): void {playSample(Sounds[0]); });
document.querySelector(".pad-2").addEventListener("click", function(): void {playSample(Sounds[1]); });
document.querySelector(".pad-3").addEventListener("click", function(): void {playSample(Sounds[2]); });
document.querySelector(".pad-4").addEventListener("click", function(): void {playSample(Sounds[3]); });
document.querySelector(".pad-5").addEventListener("click", function(): void {playSample(Sounds[4]); });
document.querySelector(".pad-6").addEventListener("click", function(): void {playSample(Sounds[5]); });
document.querySelector(".pad-7").addEventListener("click", function(): void {playSample(Sounds[6]); });
document.querySelector(".pad-8").addEventListener("click", function(): void {playSample(Sounds [7]); });
document.querySelector(".pad-9").addEventListener("click", function(): void {playSample(Sounds[8]); });
document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });

  }




