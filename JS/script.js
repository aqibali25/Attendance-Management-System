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
document.getElementById("menu-btn").addEventListener("click", function () {
  const icon = document.querySelector(".menu-btn i");
  const sideBar = document.getElementById("sideBar");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
  if (sideBar.style.left === "-20px") {
    sideBar.style.left = "-150%";
  } else {
    sideBar.style.left = "-20px";
  }
});
function showUpdateProfile() {
  var updateProfile = document.getElementById("updateProfile");
  var bodyOpacity = document.getElementById("bodyOpacity");
  updateProfile.style.display = "flex";
  bodyOpacity.style.display = "block";
}

function hideUpdateProfile() {
  var updateProfile = document.getElementById("updateProfile");
  var bodyOpacity = document.getElementById("bodyOpacity");
  updateProfile.style.display = "none";
  bodyOpacity.style.display = "none";
}
//   ##### Display Forms #####

// Get all the necessary elements
const present = document.getElementById("present");
const leave = document.getElementById("leave");
const view = document.getElementById("view");
const presentForm = document.querySelector(".formContainer .presentForm");
const leaveForm = document.querySelector(".formContainer .leaveForm");
const viewTable = document.querySelector(".formContainer .viewTable");

present.addEventListener("click", function () {
  present.classList.add("active");
  leave.classList.remove("active");
  view.classList.remove("active");
});

leave.addEventListener("click", function () {
  leave.classList.add("active");
  present.classList.remove("active");
  view.classList.remove("active");
});

view.addEventListener("click", function () {
  view.classList.add("active");
  leave.classList.remove("active");
  present.classList.remove("active");
});
