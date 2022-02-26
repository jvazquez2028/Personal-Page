function toggleDarkMode() {
    let bodyElement = document.getElementById('main-background');
    let darkModeButtonElement = document.getElementById('darkMode');

//if in dark mode, change to light

if (bodyElement.style.background === "black") {
    bodyElement.style.background = "rgb(255, 255, 254)";
    bodyElement.style.color ="black";
    darkModeButtonElement.innerText = "Dark Mode";
} else {
    bodyElement.style.background ="black";
    bodyElement.style.color ="white";
    darkModeButtonElement.innerHTML = "Light Mode"
}

}
