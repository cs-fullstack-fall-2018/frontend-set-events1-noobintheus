var theButton = document.getElementById("button1");
var total = document.getElementById("theTotal");

theButton.addEventListener("click", sumPress);

function sumPress() {

    total.innerText = parseInt(total.innerText) + 1;
}
var horrible  = document.getElementById("button2");
var tasty = document.getElementById("the");

horrible.addEventListener("click", Press);

function Press() {

    tasty.innerText = parseInt(total.innerText) + 1;
}

