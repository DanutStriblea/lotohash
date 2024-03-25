document.getElementById('generateButton').addEventListener('click', function() {
    generateRandomNumbers();
});

function generateRandomNumbers() {
    const count = 6;
    const maxNumber = 49;
    const numbersList = document.getElementById('numbersList');

    // Clear the previous numbers
    numbersList.innerHTML = '';

    // Generate and add the numbers to the HTML list
    for (let i = 0; i < count; i++) {
        let number = generateRandomNumber(maxNumber);
        let listItem = document.createElement('li');
        listItem.textContent = number;
        numbersList.appendChild(listItem);
    }
}

function generateRandomNumber(maxNumber) {
    // Generate a random number between 1 and maxNumber
    return Math.floor(Math.random() * maxNumber) + 1;
}
