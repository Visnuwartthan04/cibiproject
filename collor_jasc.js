document.addEventListener("DOMContentLoaded", function() {
    const skinToneBoxes = document.querySelectorAll(".skin-tone-box");
    const fashionSections = document.querySelectorAll(".fashion-container");
    const infoBox = document.getElementById("info-box");

    // Click Event for Skin Tone Selection
    skinToneBoxes.forEach(box => {
        box.addEventListener("click", function() {
            let selectedTone = box.getAttribute("data-tone");

            // Hide all fashion sections first
            fashionSections.forEach(section => {
                section.classList.add("hidden");
            });

            // Show the relevant section
            document.getElementById("fashion-" + selectedTone).classList.remove("hidden");

            // Update info box
            infoBox.textContent = "Selected: " + box.textContent;
        });

        box.addEventListener("mouseover", function() {
            infoBox.textContent = "Click to select: " + box.textContent;
        });

        box.addEventListener("mouseout", function() {
            infoBox.textContent = "Click on a skin tone to see fashion recommendations";
        });
    });
});