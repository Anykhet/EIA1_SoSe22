var sound = [
    new Audio("./assets/A.mp3"),
    new Audio("./assets/C.mp3"),
    new Audio("./assets/F.mp3"),
    new Audio("./assets/G.mp3"),
    new Audio("./assets/hihat.mp3"),
    new Audio("./assets/kick.mp3"),
    new Audio("./assets/snare.mp3"),
    new Audio("./assets/laugh-1.mp3"),
    new Audio("./assets/laugh-2.mp3") 
];
window.addEventListener("load", function () {
    document.querySelector(".pad").addEventListener('click', playSample);
});
function playSample() {
    document.querySelector(".pad-1").addEventListener('click', Pad1);
    function Pad1() {
        sound[5].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-2").addEventListener('click', Pad2);
    function Pad2() {
        sound[6].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-3").addEventListener('click', Pad3);
    function Pad3() {
        sound[4].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-4").addEventListener('click', Pad4);
    function Pad4() {
        sound[2].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-5").addEventListener('click', Pad5);
    function Pad5() {
        sound[3].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-6").addEventListener('click', Pad6);
    function Pad6() {
        sound[0].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-7").addEventListener('click', Pad7);
    function Pad7() {
        sound[1].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-8").addEventListener('click', Pad8);
    function Pad8() {
        sound[7].play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-9").addEventListener('click', Pad9);
    function Pad9() {
        sound[8].play();
        sound.volume = 0.2;
    }
    document.querySelector(".play").addEventListener('click', Playbutton);
    function Playbutton() {
        setInterval(function () {
            sound[6].play();
            sound[5].play();
            sound[4].play();
        }, 500);
    }
}
//# sourceMappingURL=Aufgabe8.js.map