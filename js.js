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

    tasty.innerText = parseInt(tasty.innerText) + 1;
}

/*

Step 1:
Complete

Step 2:
Incomplete. The second button looks like it's getting the total from the first button and adding 1. Try getting the total from the second button.


From Kenn
*/
