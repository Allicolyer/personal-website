document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var currentPage = window.location.href;

    // Get all elements with the class 'navLink'
    var navLinks = document.querySelectorAll('.navLink');

    // Loop through each navLink
    navLinks.forEach(function (navLink) {
        // Check if the navLink href matches the current page URL
        if (navLink.href === currentPage) {
            // Add the class 'isSelected'
            navLink.classList.add('isSelected');
            // Optionally, remove the href attribute
            navLink.removeAttribute('href');
        }
    });
});