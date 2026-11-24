let count = 0;

let button = document.getElementById("clickButton");
let heading = document.getElementById("heading");

button.onclick = function() {
    count++;

    heading.textContent = "Button Clicked: " + count;

    if (count == 10) {
        alert("You have clicked 10 times!");
    }
};