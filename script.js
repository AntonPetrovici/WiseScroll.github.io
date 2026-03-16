const themeToggle = document.getElementById("themeToggle");

function loadTheme() {
  const savedTheme = localStorage.getItem("wisescroll-theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    localStorage.setItem("wisescroll-theme", "light");
  } else {
    localStorage.setItem("wisescroll-theme", "dark");
  }
}

loadTheme();

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}