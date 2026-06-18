const menuButton = document.getElementById("menubutton");

menuButton.addEventListener("click", () => openMenu());

function openMenu(){

    menuicon.classList.toggle("open");
    menubutton.classList.toggle("open");
    bannernav.classList.toggle("open");
    bannerlinks.classList.toggle("open");
}
