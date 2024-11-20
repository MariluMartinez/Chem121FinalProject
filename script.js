// Function to show the info box next to the clicked word
        function showInfoBox(event, word) {
            var infoBox = document.getElementById('info-box');
            var wordElement = event.target; // The clicked word

            // Get the position of the clicked word
            var rect = wordElement.getBoundingClientRect();

            // Set the position of the info box to be next to the clicked word
            infoBox.style.left = rect.right + 10 + 'px';  // 10px to the right of the word
            infoBox.style.top = rect.top + window.scrollY + 'px'; // Align vertically with the word

            // Change the text in the info box based on the clicked word
            var infoText = document.getElementById('info-text');
            if (word === 'neurotransmitter') {
                infoText.textContent = "This is the additional information about the 'neurotransmitter' word.";
            } else if (word === 'important') {
                infoText.textContent = "This is the additional information about the 'important' word.";
            } else {
                infoText.textContent = "This is the default additional information.";
            }

            // Toggle the visibility of the info box
            if (infoBox.style.display === 'none' || infoBox.style.display === '') {
                infoBox.style.display = 'block';  // Show the box
            } else {
                infoBox.style.display = 'none';  // Hide the box
            }
        }