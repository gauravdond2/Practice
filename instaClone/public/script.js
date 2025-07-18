  // Get a reference to the button and the dropdown menu
    const button = document.getElementById('kebab-menu-button');
    const dropdown = document.getElementById('kebab-menu-dropdown');

    // Toggle the menu's visibility when the button is clicked
    button.addEventListener('click', function(event) {
        dropdown.classList.toggle('hidden');
        event.stopPropagation(); // Prevents the click from immediately bubbling up to the document
    });

    // Hide the menu if the user clicks anywhere else on the page
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });