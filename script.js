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
    var infoImage = document.getElementById('info-image');

    if (word === 'neurotransmitter') {
        infoText.textContent = "Neurotransmitters are the body's chemical messengers. It helps transmit signals in the brain and the nervous system. Neurotransmitters are located in the part of the neuron called the axon terminal. They are stored in sacs called synaptic vesicles. An electrical signal is sent to the axon terminal, telling the neurotransmitter to move to the nerve cell membrane and is released from the axon terminal to a fluid-filled space between one nerve cell and the target cell. From this space, the neurotransmitter carries the message across. Each type of neurotransmitter lands on and binds to a specific receptor. It's a key-and-lock system.";
        infoImage.src = "neurotransmitters.jpg";
        infoImage.style.display = 'block';
    } else if (word === 'anticholinergic') {
        infoText.textContent = "Anticholinergic medicines are a class of drugs that block acetylcholine from binding to its muscarinic receptors. These medicines are used to treat a wide range of conditions if acetylcholine's action is problematic or excessive. These medicines can either reduce secretions, relax smooth muscles, or increase heart rate. Most medicines have a similar structure to acetylcholine, letting it bind to the muscarinic receptors. They all have different compound structures containing carbon, hydrogen, nitrogen, and oxygen.";
        infoImage.style.display = 'none'; 
    } else if (word === 'side chains') {
        infoText.textContent = 'Side chains refers to a group of atoms attached to the main structure of a molecule. Side chains vary in size, structure, and properties, and play an important role in the chemical behavior, function, and properties of the molecule. '; 
        infoImage.style.display = 'none'; 
    } else if (word === 'glycopyrrolate') {
        infoText.textContent = "Glycopyrrolate is more specifically called glycopyrrolate bromide. The bromide is the bromine ion (Br-) that is paired with the glycopyrrolate molecule. When glycopyrrolate is made into a medicine, it is usually made in the form of a salt to make it easy to handle, and stable, and to help it be absorbed easier in the body. The positively charged glycopyrrolate molecule forms a bond with the negatively charged bromide ion, creating glycopyrrolate bromide. Once digested, the bromide ion stays in the body, along with the glycopyrrolate. However, the bromide ion is not an active part of the medicine, it is simply there to help remain the drug stable and be properly absorbed."; 
        infoImage.style.display = 'none';
    } else if (word === 'group') {
        infoText.textContent = 'Groups, or functional groups, are specific groups of atoms within a molecule that is responsible for its chemical reactions and properties, regardless of what other atoms are present in the molecule. They are often made up of atoms like carbon, oxygen, nitrogen, sulfur, and hydrogen, and they give organic compounds their distinctive characteristics.'; 
        infoImage.style.display = 'none';
    }
    else {
        infoText.textContent = "This is the default additional information.";
        infoImage.style.display = 'none';
    }

    // Toggle the visibility of the info box
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        infoBox.style.display = 'block';  // Show the box
    } else {
        infoBox.style.display = 'none';  // Hide the box
    }
}
