const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const Popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (Popup) {
  closePopup.addEventListener("click", () => {
    Popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      Popup.classList.remove("hide-popup");
    }, 5000);
  });
}

// user
const userData = document.querySelector("#user-data");

fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.name.first} ${user.name.last}</td>
        <td>${user.email}</td>
        
        
        <td>${getRandomComment()}</td>
      `;
      userData.appendChild(tr);
    });
  })
  .catch((error) => console.log(error));

function getRandomComment() {
  const comments = [
    "I love it!",
    "Highly recommended",
    "Will buy again",
    "Excellent quality",
    "Amazing",
    "Fast delievry",
    "There's nothing VANILLA about this website",
    "meh",
    "cool stuff",
    "I bought the red bag , loved it.",
  ];
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}

// login
// get the form and input elements
// Get the form element and attach an event listener to the submit event
const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  // Get the user's input
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("psw")[0].value;

  // TODO: Add your own validation logic here
  // For example, you can check if the email and password match a database of registered users

  // Redirect the user to the homepage if their email and password are correct
  if (email === "user@example.com" && password === "password") {
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

// search

const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener("click", () => {
  window.location.href = "productDetails.html";
});
