var passwordInput = document.getElementById("password");

var icon = document.getElementById("eye");

icon.addEventListener("click", function showpassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
});
window.addEventListener("load", function () {
  document.getElementById("email").focus();
});
if (
  window.location.href.includes("login.html") ||
  window.location.href.includes("login")
) {
  checkLoginStatus();
}

function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem("user");
  if (isLoggedIn) {
    window.location.href = "index.html";
  }
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = {
    email: email,
    password: password,
  };
  if (email === "aqib@gmail.com" && password === "123") {
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password. Please try again.");
    e.preventDefault();
  }
});
