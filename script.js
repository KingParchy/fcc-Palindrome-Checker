// Get the DOM elements
const userInput = document.getElementById("text-input"); // Get the text input element
const checkPlndBtn = document.getElementById("check-btn"); // Get check button element
const resultDiv = document.getElementById("result"); // Get the result element

// Function to check if the input is a palindrome
const checkForPalindrome = () => {
    const input = userInput.value.trim(); // Get the user input and remove any whitespace

    if (input === "") {
        // Check if the input is empty
        alert("Please input a value"); // Show an alert to the user to input a value
        return; // Exit the function
    }

    resultDiv.replaceChildren(); // Clear the previous result
    displayResult(isPalindrome(input)); // Check if the input is a palindrome and display the result
};

// Function to check if the given string is a palindrome
const isPalindrome = (input) => {
    const regex = /[\W_]/gi; // Create a regular expression to remove non-alphanumeric characters and convert to lowercase
    const lowRegStr = input.toLowerCase().replace(regex, "");
    const reverseStr = lowRegStr.split("").reverse().join(""); // Reverse the cleaned input string

    return lowRegStr === reverseStr; // Check if the cleaned input string is the same as the reversed string
};

// Function to display the result
const displayResult = (isPalindrome) => {
    const resultText = `<strong>${userInput.value}</strong> ${
        isPalindrome ? "is" : "is not"
    } a palindrome.`; // Create the result text

    const paraEl = document.createElement("p"); // Create a new paragraph element
    paraEl.className = "user-input"; // Set the class name for the paragraph element
    paraEl.innerHTML = resultText; // Set the inner HTML of the paragraph element to the result text
    resultDiv.appendChild(paraEl); // Append the paragraph element to the result division element

    resultDiv.classList.remove("hidden"); // Remove the hidden class from the result division element to display the result
};

checkPlndBtn.addEventListener("click", checkForPalindrome); // Add an event listener to the check button to trigger the palindrome check
