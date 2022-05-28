// Arrays und Variablen//

var Sounds: string [] = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"), 
("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"), 
("./assets/snare.mp3")];

var beat: string []= [Sounds [4], Sounds [5], Sounds [8]];

var zaehler: number = 0;
var beatremix: number;
var interval: number ;
var tuning: boolean= false


//Funktionen// 
 
window.addEventListener("load", addClickListenersDrumPad);


//Zentrale Funktions //
    function playSample(soundQuelle) {
        var sound = new Audio(soundQuelle);
        sound.play();
     }
      
//Funktion Remix//
function REMIX (): void {
  
  
    document.querySelector("#remix").addEventListener("click", function (): void {
        
         beatremix = setInterval(function (): void {
            playSample( beat [zaehler] );
            zaehler = Math.floor(Math.random () * 9);
            },
            500);
        });
    
 }
//Funktion Play-Button//
function myBeat(): void {
  playSample(beat[zaehler]);
  zaehler += 1;
  if (zaehler > (beat.length - 1))
      zaehler = 0;
  
}

function PlayBeat(): void {
  


  //Ton soll abgespielt werden//
  if (document.getElementById("play").classList.contains("fa-play")) {
      document.getElementById("play").classList.remove("fa-play");
      document.getElementById("play").classList.add("fa-stop");
      interval = setInterval(myBeat, 350);
   
      
  //Stopfunktion des Play Buttons, wwird zum Stop//
  }
  else {
      document.getElementById("play").classList.remove("fa-stop");
      document.getElementById("play").classList.add("fa-play");
      clearInterval(interval);
     
  }
  
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
            


        document.querySelector("#play").addEventListener("click", PlayBeat);
        document.querySelector("#remix").addEventListener("click", function (): void {REMIX(); });
    
            
            
            
            

     }
