let button = document.getElementById("generateButton");
let result = document.getElementById("result");

button.onclick = function() {
    result.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            result.innerHTML += "<span style='color: green;'>" + i + " </span>";
        }
        else {
            result.innerHTML += "<span style='color: red;'>" + i + " </span>";
        }
    }
};