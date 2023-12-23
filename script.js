var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    var delete_button = document.createElement("BUTTON");
    var t = document.createTextNode("delete");
    delete_button.appendChild(t);
    delete_button.classList.add("delete");
    
    li.classList.add("list_element");
    li.append(delete_button);
    
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}

function toggleDone() {
    this.classList.toggle("done");
}

function deleteListItem() {
    ul.removeChild(this.parentNode);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);

ul.addEventListener("mouseenter", function () {
    Array.from(ul.children).forEach(element => {
        element.addEventListener("click", toggleDone);
    });
});

var deleteButtons = document.getElementsByClassName("delete");

ul.addEventListener("mouseenter", function () {
Array.from(deleteButtons).forEach(element => {
    element.addEventListener("click", deleteListItem);
});
});
