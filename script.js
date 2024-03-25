document.getElementById('generateButton').addEventListener('click', function() {
    generateRandomNumbers();
});

function generateRandomNumbers() {
    const count1 = 5; // Numărul de numere din primul interval
    const maxNumber1 = 45; // Limita superioară a primului interval
    const count2 = 1; // Numărul de numere din al doilea interval
    const maxNumber2 = 20; // Limita superioară a celui de-al doilea interval
    const numbersList = document.getElementById('numbersList');

    // Clear the previous numbers
    numbersList.innerHTML = '';

    // Generate and add the numbers from the first interval
    let generatedNumbers = new Set();
    while (generatedNumbers.size < count1) {
        let number = generateRandomNumber(maxNumber1);
        generatedNumbers.add(number);
    }

    // Generate and add the number from the second interval
    let number2 = generateRandomNumber(maxNumber2);

    // Create list items for the first interval
    for (let number of generatedNumbers) {
        let listItem = document.createElement('li');
        listItem.textContent = number;
        numbersList.appendChild(listItem);
    }

    // Create list item for the second interval
    let breakLine = document.createElement('br');
    numbersList.appendChild(breakLine);

    let listItem2 = document.createElement('li');
    listItem2.textContent = number2;
    listItem2.style.textAlign = 'center'; // Aliniere pe mijloc
    numbersList.appendChild(listItem2);
}

function generateRandomNumber(maxNumber) {
    // Generate a random number between 1 and maxNumber
    return Math.floor(Math.random() * maxNumber) + 1;
}
