function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("theme-light")) {
    localStorage.setItem("theme", "dark");
    body.classList.replace("theme-light", "theme-dark");
    icon("dark");
    footer.style.backgroundImage = "linear-gradient(transparent, #f7fafc)";
  } else {
    localStorage.setItem("theme", "light");
    body.classList.replace("theme-dark", "theme-light");
    icon("light");
    footer.style.backgroundImage = "linear-gradient(transparent, #292c35)";
  }
  setTimeout(toggleTheme, 70);
}

function icon(theme = "dark" | "light") {
  const toggleButton = document.getElementById("theme-toggle-button");
  if (theme === "dark") {
    return (toggleButton.innerHTML =
      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2"/></svg>');
  } else {
    return (toggleButton.innerHTML =
      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>');
  }
}

function setInitialThemeIcon() {
  const body = document.body;
  if (body.classList.contains("theme-light")) {
    icon("light");
  } else {
    icon("dark");
  }
}

function checkLocalStorage() {
  const body = document.body;
  const theme = localStorage.getItem("theme");
  if (!theme || theme === "dark") {
    body.classList.replace("theme-light", "theme-dark");
  } else {
    body.classList.replace("theme-dark", "theme-light");
  }
}

function showDiff() {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;
  const diffOutput = document.getElementById("diffOutput");
  var diffString = Diff.createTwoFilesPatch("Text", "Text", text1, text2);

  const configuration = {
    drawFileList: false,
    matching: "words",
    diffStyle: "words",
    renderNothingWhenEmpty: false,
    outputFormat: "line-by-line",
    fileContentToggle: false,
  };

  const diff2htmlUi = new Diff2HtmlUI(diffOutput, diffString, configuration);
  diff2htmlUi.draw();
}

function clearDiff() {
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
  document.getElementById("diffOutput").innerHTML = "";
}

checkLocalStorage();
setInitialThemeIcon();
