let button = document.getElementById("calculateButton");
let result = document.getElementById("result");

button.onclick = function() {
    let marks = Number(document.getElementById("marks").value);

    if (marks < 0 || marks > 100) {
        result.textContent = "Invalid Marks";
    }
    else if (marks >= 90) {
        result.textContent = "Grade: A+";
    }
    else if (marks >= 80) {
        result.textContent = "Grade: A";
    }
    else if (marks >= 70) {
        result.textContent = "Grade: B";
    }
    else if (marks >= 60) {
        result.textContent = "Grade: C";
    }
    else if (marks >= 50) {
        result.textContent = "Grade: D";
    }
    else {
        result.textContent = "Grade: F";
    }
};