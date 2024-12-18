

document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();


    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    let bmi = weight / (height * height);


    document.getElementById("bmiValue").textContent = bmi.toFixed(2);


    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("category").textContent = "Category: " + category;
});