// Add "Back To Top" button functionality

// Create the button element
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back To Top';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.fontSize = '14px';
backToTopButton.style.backgroundColor = '#007bff';
backToTopButton.style.color = '#ffffff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show the button when the user scrolls to the bottom of the page
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 10) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
