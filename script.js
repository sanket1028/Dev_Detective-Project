//Variables
const searchbar = document.querySelector(".searchbar-container");
const profilecontainer = document.querySelector(".profile-container");
const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);
const url = "https://api.github.com/users/";
const noresults = get("no-results");
const btnmode = get("btn-mode");
const modetext = get("mode-text");
const modeicon = get("mode-icon");
const btnsubmit = get("submit");
const input = get("input");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");
let darkMode = false;

//Event Listner 

// for search button
btnsubmit.addEventListener("click", function () {
    if (input.value !== "") {
      getUserData(url + input.value);
    }
  });

  // for mode button

  btnmode.addEventListener("click", function () {
    if (darkMode == false) {
      darkModeProperties();
    } else {
      lightModeProperties();
    }
  });

  // for input field when enter key is pressed
  input.addEventListener(
    "keydown",
    function (e) {
      if (e.key == "Enter") {
        if (input.value !== "") {
          getUserData(url + input.value);
        }
      }
    },
    false
  );

  // for input field whenever the input changes to hide no user found
  
  input.addEventListener("input", function () {
    noresults.style.display = "none";
  });
  