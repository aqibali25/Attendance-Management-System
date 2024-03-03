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

//    Display Forms

const present = document.getElementById("present");
const leave = document.getElementById("leave");
const view = document.getElementById("view");
const presentFormContainer = document.querySelector(".presentFormContainer");
const leaveFormContainer = document.querySelector(".leaveFormContainer");
const viewTableContainer = document.querySelector(" .viewTableContainer");
const main = document.querySelector("main");

present.addEventListener("click", function () {
  present.classList.add("active");
  leave.classList.remove("active");
  view.classList.remove("active");
  presentFormContainer.style.display = "flex";
  leaveFormContainer.style.display = "none";
  viewTableContainer.style.display = "none";
  main.style.borderTopLeftRadius = "10px";
  main.style.borderBottomRightRadius = "10px";
  main.style.height = "77vh";
});

leave.addEventListener("click", function () {
  leave.classList.add("active");
  present.classList.remove("active");
  view.classList.remove("active");
  presentFormContainer.style.display = "none";
  leaveFormContainer.style.display = "flex";
  viewTableContainer.style.display = "none";
  main.style.borderTopLeftRadius = "10px";
  main.style.borderBottomRightRadius = "10px";
  main.style.height = "77vh";
});

view.addEventListener("click", function () {
  view.classList.add("active");
  leave.classList.remove("active");
  present.classList.remove("active");
  presentFormContainer.style.display = "none";
  leaveFormContainer.style.display = "none";
  viewTableContainer.style.display = "flex";
  main.style.borderBottomLeftRadius = "0";
  main.style.borderBottomRightRadius = "0";
  main.style.height = "fit-content";
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
function calculateDays() {
  var fromDate = new Date(document.getElementById("from-date").value);
  var toDate = new Date(document.getElementById("to-date").value);

  var timeDifference = toDate.getTime() - fromDate.getTime();
  var daysDifference = timeDifference / (1000 * 3600 * 24);

  document.getElementById("days").value = daysDifference;
}

const viewPresent = document.getElementById("viewPresent");
const viewLeave = document.getElementById("viewLeave");
const presentTable = document.getElementById("presentTable");
const leaveTable = document.getElementById("leaveTable");

viewPresent.addEventListener("click", function () {
  this.classList.add("viewShow");
  viewLeave.classList.remove("viewShow");
  presentTable.style.display = "flex";
  leaveTable.style.display = "none";
});
viewLeave.addEventListener("click", function () {
  this.classList.add("viewShow");
  viewPresent.classList.remove("viewShow");
  presentTable.style.display = "none";
  leaveTable.style.display = "flex";
});

// #### PRESENT FORM DATA IN TABLE ####

const PresentForm = document.getElementById("PresentForm");
const viewPresentTable = document.getElementById("viewPresentTable");
const tbody = document.getElementById("tbody");

function saveToLocalStorage(data) {
  const existingData = JSON.parse(localStorage.getItem("presentData")) || [];

  existingData.push(data);

  localStorage.setItem("presentData", JSON.stringify(existingData));
}

function loadFromLocalStorage() {
  const existingData = JSON.parse(localStorage.getItem("presentData")) || [];

  existingData.forEach((rowData) => {
    const newRow = document.createElement("tr");

    rowData.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      newRow.appendChild(cell);
    });

    tbody.appendChild(newRow);
  });
}

PresentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(PresentForm);
  const values = Array.from(formData.values());
  const newRow = document.createElement("tr");

  values.forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  saveToLocalStorage(values);

  tbody.appendChild(newRow);

  PresentForm.reset();
});

window.addEventListener("load", loadFromLocalStorage);

// #### LEAVE FORM DATA IN TABLE ###
const leaveForm = document.querySelector(".leaveForm");
const viewLeaveTable = document.querySelector(".viewleaveTable tbody");

function saveDataToLocalStorage(data) {
  const existingData = JSON.parse(localStorage.getItem("leaveData")) || [];
  existingData.push(data);
  localStorage.setItem("leaveData", JSON.stringify(existingData));
}

function getDataFromLocalStorageAndAppend() {
  const storedData = JSON.parse(localStorage.getItem("leaveData")) || [];

  storedData.forEach((data) => {
    const newRow = viewLeaveTable.insertRow();

    Object.values(data).forEach((value, index) => {
      const cell = newRow.insertCell(index);
      cell.textContent = value;
    });
  });
}

leaveForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fromDate = document.getElementById("from-date").value;
  const toDate = document.getElementById("to-date").value;
  const leaveReason = document.getElementById("reason").value;
  const days = document.getElementById("days").value;

  saveDataToLocalStorage({
    fromDate,
    toDate,
    leaveReason,
    days,
  });

  const newRow = viewLeaveTable.insertRow();

  const dateCell = newRow.insertCell(0);
  dateCell.textContent = fromDate;

  const toDateCell = newRow.insertCell(1);
  toDateCell.textContent = toDate;

  const leaveReasonCell = newRow.insertCell(2);
  leaveReasonCell.textContent = leaveReason;

  const daysCell = newRow.insertCell(3);
  daysCell.textContent = days;

  leaveForm.reset();
});

getDataFromLocalStorageAndAppend();
