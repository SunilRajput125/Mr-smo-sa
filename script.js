// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger and navigation elements
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nv');
    
    // Toggle the 'active' class on the navigation menu when the hamburger is clicked
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
