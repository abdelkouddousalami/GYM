document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger').addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });

    document.getElementById('close-btn').addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});


document.getElementById('calorie-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = document.getElementById('activity-level').value;
    const goal = document.getElementById('goal').value; // Get goal from the newly added dropdown

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const dailyCalories = calculateCalories(weight, height, age, activityLevel, goal);

    document.getElementById('calorie-result').classList.remove('hidden');
    document.getElementById('result-text').textContent = `Your estimated daily calorie requirement is ${dailyCalories.toFixed(0)} calories.`;
});
