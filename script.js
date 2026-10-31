// ===== Favorites (Products page) =====
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function showFavorites() {
  const list = document.getElementById("favorites-list");
  if (!list) return;
  list.innerHTML = "";
  favorites.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function addFavorite(item) {
  if (!favorites.includes(item)) {
    favorites.push(item);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  showFavorites();
}

document.querySelectorAll(".fav-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    addFavorite(button.dataset.item);
  });
});

showFavorites();

// ===== Form validation (Contact page) =====
function showError(field, message) {
  document.getElementById(field + "-error").textContent = message;
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const details = document.getElementById("details").value.trim();
  let valid = true;

  showError("name", "");
  showError("email", "");
  showError("details", "");

  if (name === "") {
    showError("name", "Please enter your name.");
    valid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError("email", "Please enter a valid email.");
    valid = false;
  }

  if (details.length < 10) {
    showError("details", "Please write at least 10 characters.");
    valid = false;
  }

  return valid;
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
}
