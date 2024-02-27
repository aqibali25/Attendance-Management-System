if (
  window.location.href.includes("signup.html") ||
  window.location.href.includes("signup")
) {
  checkLoginStatus();
}

function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem("user");
  if (isLoggedIn) {
    window.location.href = "index.html";
  }
}
