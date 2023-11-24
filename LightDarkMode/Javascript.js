const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".icon-toggle"),
  search = body.querySelector(".link-search"),
  mode = body.querySelector(".mode-text"),
  modeSwitchs = body.querySelector(".toggle-switch");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  modeSwitchs.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
      mode.innerText = "Light Mode";
    } else {
      mode.innerText = "Dark Mode"
    }
  });


