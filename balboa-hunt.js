// Scavenger Hunt Stops
// Scavenger Hunt Stops
// Scavenger Hunt Stops
const stops = [
    {
        name: "Plaza de Panama Fountain",
        history: "The Plaza de Panama Fountain, built for the 1915 Panama-California Exposition, is a beautiful gathering place surrounded by Spanish colonial architecture.",
        question: "I stand in the center, a circular delight,\nWith streams that sparkle in the sun's light.\nCount my spouts, and you shall see,\nA clue to unlock the next mystery.",
        image: "BH8.jpg",
        answers: ["8", "eight"] // Correct answers for this stop
    },
    {
        name: "Botanical Building",
        history: "The Botanical Building, also constructed for the 1915 Exposition, houses over 2,100 plants and remains a popular attraction in Balboa Park.",
        question: "I'm a treasure for your taste buds, smooth and sweet,\nI grow where the sun's rays and rainbows meet.\nFind the plant that brings cocoa its fame,\nTell me its secret and write down my name.",
        image: "BH4.jpg",
        answers: ["cacao", "cocoa"] // Correct answers for this stop
    },
    {
        name: "Lily Pond",
        history: "The Lily Pond is an iconic spot in Balboa Park, offering a serene view of the water and its surroundings, perfect for a peaceful stroll.",
        question: "By the lilies, a mirror of the sky so blue,\nCount the pathways that guide you through.\nBridges of wonder, how many can you find?\nThe answer unlocks the next clue in your mind.",
        image: "BH9.jpg",
        answers: ["0", "zero"] // Correct answers for this stop
    }
];

// Function to Render All Stops
function renderStops() {
    const locationsContainer = document.getElementById("locations-container");

    // Ensure the container exists
    if (!locationsContainer) {
        console.error("locations-container not found!");
        return;
    }

    // Clear the container
    locationsContainer.innerHTML = "";

    // Loop through each stop and add it to the container
    stops.forEach((stop, index) => {
        const stopElement = document.createElement("div");
        stopElement.classList.add("location");

        stopElement.innerHTML = `
            <h2>${stop.name}</h2>
            <p class="history">${stop.history}</p>
            <img src="${stop.image}" alt="${stop.name}" class="location-image">
            <p class="riddle">${stop.question}</p>
            <input type="text" id="answer-${index}" placeholder="Type your answer here..." class="answer-box">
            <button class="submit-btn" data-index="${index}">Submit Answer</button>
            <p id="feedback-${index}" class="feedback"></p>
        `;

        locationsContainer.appendChild(stopElement);
    });

    // Add Event Listeners to Each Button
    const submitButtons = document.querySelectorAll(".submit-btn");
    submitButtons.forEach((button) => {
        button.addEventListener("click", validateAnswer);
    });

    console.log("All locations rendered successfully!");
}

// Function to Validate Answers
function validateAnswer(event) {
    const index = event.target.dataset.index; // Get the index of the stop
    const userInput = document.getElementById(`answer-${index}`).value.trim().toLowerCase(); // Get user input
    const correctAnswers = stops[index].answers; // Get correct answers for the stop
    const feedbackElement = document.getElementById(`feedback-${index}`); // Feedback container

    if (correctAnswers.includes(userInput)) {
        // Correct answer
        feedbackElement.textContent = "Correct! 🎉";
        feedbackElement.style.color = "green";
        feedbackElement.style.opacity = "1"; // Ensure it's visible
    } else {
        // Wrong answer with blinking effect
        feedbackElement.textContent = "Try again. ❌";
        feedbackElement.style.color = "red";

        // Add a blinking effect
        feedbackElement.style.opacity = "0"; // Temporarily hide
        setTimeout(() => {
            feedbackElement.style.opacity = "1"; // Show again after 200ms
        }, 200);
    }
}

// Get Elements for Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle Dropdown Menu
hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Functionality for "Instructions" Button
const instructionsButton = document.getElementById('instructions-btn');
instructionsButton.addEventListener('click', () => {
    alert(`
        🔍 How to Play:
        1. Visit each location.
        2. Answer the riddle to unlock the next clue.
        3. Type your answer in the box and press submit.
        4. Get all the answers right to complete the hunt!
    `);
});




// Initialize Rendering
renderStops();
