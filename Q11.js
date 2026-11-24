let students = [];

let button = document.getElementById("addButton");
let result = document.getElementById("result");

button.onclick = function() {

    let name = document.getElementById("name").value;

    let subject1 = Number(document.getElementById("subject1").value);
    let subject2 = Number(document.getElementById("subject2").value);
    let subject3 = Number(document.getElementById("subject3").value);

    if (name == "" || document.getElementById("subject1").value == "" ||
        document.getElementById("subject2").value == "" ||
        document.getElementById("subject3").value == "") {

        alert("Please fill in all fields");
    }

    else if (subject1 < 0 || subject1 > 100 ||
             subject2 < 0 || subject2 > 100 ||
             subject3 < 0 || subject3 > 100) {

        alert("Marks must be between 0 and 100");
    }

    else {

        let student = {
            name: name,
            subject1: subject1,
            subject2: subject2,
            subject3: subject3
        };

        students.push(student);

        result.innerHTML = "";

        for (let i = 0; i < students.length; i++) {

            let total = students[i].subject1 +
                        students[i].subject2 +
                        students[i].subject3;

            let average = total / 3;

            result.innerHTML +=
                "<p>Name: " + students[i].name +
                "<br>Total Marks: " + total +
                "<br>Average: " + average.toFixed(2) +
                "</p><hr>";
        }
    }
};
