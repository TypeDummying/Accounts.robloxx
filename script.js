// Get the button element
const button = document.querySelector("button");

// Get the paragraph element
const paragraph = document.getElementById("metadataParagraph");

// Define your metadata key
const metadataKey = "Your Metadata Key"; // Replace with your actual metadata key

// Add a click event listener to the button
button.addEventListener("click", () => {
    paragraph.textContent = metadataKey;
});
