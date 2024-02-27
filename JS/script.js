if (
  window.location.href.includes("index.html") ||
  window.location.href.includes("index")
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
  if (dropdown.style.top === "70px") {
    dropdown.style.top = "-500px";
  } else {
    dropdown.style.top = "70px";
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
