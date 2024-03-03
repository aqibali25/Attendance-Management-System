// if (
//   window.location.href.includes("index.html") ||
//   window.location.href === "https://aqibali25.github.io/ezitech-intern-test/" ||
//   window.location.href ===
//     "https://aqibali25.github.io/ezitech-intern-test/index"
// ) {
//   checkLoginStatus();
// }
// function checkLoginStatus() {
//   const isLoggedIn = sessionStorage.getItem("user");
//   if (!isLoggedIn) {
//     window.location.href = "login.html";
//   }
// }
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

//    Display Forms

const present = document.getElementById("present");
const leave = document.getElementById("leave");
const view = document.getElementById("view");
const presentFormContainer = document.querySelector(".presentFormContainer");
const leaveFormContainer = document.querySelector(".leaveFormContainer");
const viewTableContainer = document.querySelector(" .viewTableContainer");

present.addEventListener("click", function () {
  present.classList.add("active");
  leave.classList.remove("active");
  view.classList.remove("active");
  presentFormContainer.style.display = "flex";
  leaveFormContainer.style.display = "none";
  viewTableContainer.style.display = "none";
});

leave.addEventListener("click", function () {
  leave.classList.add("active");
  present.classList.remove("active");
  view.classList.remove("active");
  presentFormContainer.style.display = "none";
  leaveFormContainer.style.display = "flex";
  viewTableContainer.style.display = "none";
});

view.addEventListener("click", function () {
  view.classList.add("active");
  leave.classList.remove("active");
  present.classList.remove("active");
  presentFormContainer.style.display = "none";
  leaveFormContainer.style.display = "none";
  viewTableContainer.style.display = "flex";
});

//Time Calculate for worked hours

function calculateTime() {
  var inTime = document.getElementById("in-time").value;
  var offTime = document.getElementById("off-time").value;

  var inTimeDate = new Date("1970-01-01T" + inTime);
  var offTimeDate = new Date("1970-01-01T" + offTime);

  var timeDifference = offTimeDate - inTimeDate;

  var hoursWorked = timeDifference / (1000 * 60 * 60);
  var minutesWorked = (hoursWorked % 1) * 60;

  document.getElementById("hours-worked").value = Math.floor(hoursWorked);
  document.getElementById("minutes-worked").value = Math.round(minutesWorked);
}
// #### Update Profile ####

function updateProfile(event) {
  event.preventDefault();

  const fileInput = document.getElementById("profile-image");
  const file = fileInput.files[0];

  if (file) {
    // Convert the file to a data URL
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataURL = e.target.result;

      localStorage.setItem("profileImage", imageDataURL);

      document.getElementById("profile").src = imageDataURL;

      hideUpdateProfile();
    };

    reader.readAsDataURL(file);
  }
}

window.onload = function () {
  const profileImage = localStorage.getItem("profileImage");
  if (profileImage) {
    document.getElementById("profile").src = profileImage;
  }
};
