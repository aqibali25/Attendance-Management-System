if (
  window.location.href.includes("index.html") ||
  window.location.href === "https://aqibali25.github.io/ezitech-intern-test/" ||
  window.location.href ===
    "https://aqibali25.github.io/ezitech-intern-test/index"
) {
  checkLoginStatus();
}
function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem("user");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}
function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
}
var dropdown = document.getElementById("dropdown");

function show() {
  if (dropdown.style.top === "-9px") {
    dropdown.style.top = "105%";
    dropdown.style.height = "100px";
    dropdown.style.borderTopRightRadius = "0";
  } else {
    dropdown.style.top = "-9px";
    dropdown.style.height = "10px";
    dropdown.style.borderTopRightRadius = "30px";
  }
}
var menuBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close");
var navLinks = document.getElementById("navLinks");

closeBtn.addEventListener("click", function () {
  this.style.left = "-100px";
  menuBtn.style.left = "10px";
  navLinks.style.left = "-100%";
});
menuBtn.addEventListener("click", function () {
  this.style.left = "-100px";
  closeBtn.style.left = "15px";
  navLinks.style.left = "0";
});
function addClass(element) {
  // Remove "active" class from all divs
  var allDivs = document.querySelectorAll(".sideBar div");
  allDivs.forEach(function (div) {
    div.classList.remove("active");
  });

  // Add "active" class to the clicked div
  element.classList.add("active");
}
