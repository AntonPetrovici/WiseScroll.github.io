const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
  const isLight = document.body.classList.contains("light-theme");

  if (isLight) {
    themeToggle.textContent = "☀";
    themeToggle.style.backgroundColor = "#ffffff";
    themeToggle.style.color = "#0f172a";
    themeToggle.style.borderColor = "rgba(15, 23, 42, 0.12)";
  } else {
    themeToggle.textContent = "☾";
    themeToggle.style.backgroundColor = "#0f172a";
    themeToggle.style.color = "#ffffff";
    themeToggle.style.borderColor = "rgba(255, 255, 255, 0.18)";
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("wisescroll-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }

  updateThemeButton();
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("wisescroll-theme", "light");
  } else {
    localStorage.setItem("wisescroll-theme", "dark");
  }

  updateThemeButton();
}

themeToggle.addEventListener("click", toggleTheme);

loadTheme();
