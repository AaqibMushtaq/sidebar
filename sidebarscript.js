const togglebutton = document.querySelector(".toggle-button");
const closeButton = document.querySelector(".close-button");
const sideBar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
togglebutton.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar-visible");
});
sidebarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar-visible");
});
closeButton.addEventListener("click", function () {
  sideBar.classList.remove("sidebar-visible");
});
