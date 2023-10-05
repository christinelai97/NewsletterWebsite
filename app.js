
//constants to help toggle navbar for smaller screensize
const toggleButton = document.getElementById("toggle-button");
const navBar = document.getElementById("nav-bar");
const navList = document.getElementById("nav-list");

//adds a click event listener
toggleButton.addEventListener('click', () => {

    //toggles between adding active class on click event
    navList.classList.toggle("active");
    navBar.classList.toggle("remove-border");
});

