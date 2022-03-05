const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});




function toggleDarkMode() {
    let bodyElement = document.getElementById('main-background');
    let darkModeButtonElement = document.getElementById('darkMode');
    let navbarHeaderElement = document.getElementById('navbar');

//if in dark mode, change to light

    if (bodyElement.style.background === "black") {
        bodyElement.style.background = "rgb(255, 255, 254)";
        bodyElement.style.color ="black";
        darkModeButtonElement.innerText = "Dark Mode";
        navbarHeaderElement.style.background = "white";
    } else {
        bodyElement.style.background ="black";
        bodyElement.style.color ="white";
        navbarHeaderElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Light Mode"
        
    }
}
