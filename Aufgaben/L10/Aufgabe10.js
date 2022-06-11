window.addEventListener("load", function () {
    //Variablen
    let enter = document.getElementById("inputText");
    let tasksNumber = 0;
    enter.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            addTask();
            enter.value = "";
        }
    });
    //Funktionen//
    function addTask() {
        let div = document.createElement("div");
        div.className = "toDoItem";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        let label = document.createElement("label");
        label.innerHTML = enter.value;
        label.className = "taskText";
        let trash = document.createElement("i");
        trash.className = "far fa-trash-alt";
        document.getElementById("toDoList").appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(trash);
        function deleteTask(div) {
            div.remove();
            tasksNumber--;
            tasksAnzahl();
        }
        trash.addEventListener("click", function (event) {
            console.log(event);
            deleteTask(div);
        });
        tasksNumber++;
        tasksAnzahl();
    }
    function tasksAnzahl() {
        document.getElementById("counter").innerText = tasksNumber + " in total";
    }
});
//# sourceMappingURL=Aufgabe10.js.map