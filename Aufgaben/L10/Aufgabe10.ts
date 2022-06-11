window.addEventListener("load", function (): void {


 //Variablen
   let enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
   let tasksNumber: number = 0;

   enter.addEventListener("keypress", function (event: KeyboardEvent): void {
       if (event.key == "Enter") {
            addTask();
            enter.value = "";
       }
   });



   

//Funktionen//
   function addTask(): void {

       

       let div: HTMLDivElement = document.createElement("div");
       div.className = "toDoItem";

       
       let checkbox: HTMLInputElement = document.createElement("input");
       checkbox.type = "checkbox";
       checkbox.className = "checkBox";

       let label: HTMLLabelElement = document.createElement("label");
       label.innerHTML = enter.value;
       label.className = "taskText"; 

       let trash: HTMLElement = document.createElement("i");
       trash.className = "far fa-trash-alt"; 

       document.getElementById("toDoList").appendChild(div);
       div.appendChild(checkbox);
       div.appendChild(label);
       div.appendChild(trash);

       function deleteTask(div: HTMLDivElement): void {
         div.remove();
  
         tasksNumber--;
         tasksAnzahl();
     }
       trash.addEventListener("click", function (event: MouseEvent): void {
           console.log(event);
           deleteTask(div);
           
       });

       tasksNumber++;
       tasksAnzahl();
   }



   function tasksAnzahl(): void {
       document.getElementById("counter").innerText = tasksNumber + " in total";
   }







});

