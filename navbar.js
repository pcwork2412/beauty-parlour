// // Toggle Navbar on Mobile
// const toggleNav = document.getElementById('toggleNav');
// const navMenu = document.getElementById('navMenu');

// toggleNav.addEventListener('click', () => {
//   navMenu.classList.toggle('show');
// });

// Toggle Sidebar
document.getElementById("sidebarToggle").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "250px";
});

// Close Sidebar
document.getElementById("closeSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "0";
});

