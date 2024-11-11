// ************* GALLERY SECTION  ***************//

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');

// Get all images
const images = document.querySelectorAll('.filter');

// Add click event to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Get the filter value (all, html, css, etc.)
        const filterValue = this.getAttribute('data-filter');

        // Show/Hide images based on the filter value
        images.forEach(img => {
            if (filterValue === 'all') {
                img.style.display = 'block';
            } else {
                if (img.classList.contains(filterValue)) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            }
        });
    });
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-450px'; // Close the sidebar
    } else {
        sidebar.style.left = '0px'; // Open the sidebar
    }
}




// *************  ACTIVE NAVIGATION LINKS   ***************//

 // High-level function to handle navigation link activation
 const handleNavLinkActivation = (event) => {
    // Prevent default action if necessary (e.g., if you're using anchor scrolling)
    event.preventDefault();
  
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
  
    // Add active class to the clicked link
    event.target.classList.add('active');
  };
  
  // Function to initialize the event listeners for navigation links
  const initNavLinks = () => {
    const navbar = document.getElementById('navbar');
    navbar.addEventListener('click', (event) => {
      // Ensure only nav-link elements trigger the handler
      if (event.target.classList.contains('nav-link')) {
        handleNavLinkActivation(event);
      }
    });
  };
  
  // Initialize the functionality when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    initNavLinks();
  });
  
  
  