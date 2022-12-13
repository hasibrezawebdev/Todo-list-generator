var input = document.getElementsByTagName("input")[0];
var button = document.getElementById("add");
var ul = document.getElementsByTagName("ul")[0];

function inputLength() {
    return input.value.length;
}

function createList() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var del = document.createElement("button");
    div.appendChild(li);
    div.appendChild(del);
    li.appendChild(document.createTextNode(input.value));
    del.appendChild(document.createTextNode("Delete"));
    del.classList.add("delete");
    ul.appendChild(div);
    input.value = "";
}

function byClick() {
    if (inputLength() > 0) {
        createList()
    }
}

function byEnter(i) {
    if (inputLength() > 0 && i.keyCode === 13) {
        createList()
    }
}

function doneTask(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("done");
    }
}

function deleteTask(task) {
    if (task.target.className === "delete") {
        task.target.parentElement.remove();
    }
}
function ulOption(task) {
    doneTask(task);
    deleteTask(task);
}
button.addEventListener("click", byClick);
input.addEventListener("keypress", byEnter);
ul.addEventListener("click", ulOption);