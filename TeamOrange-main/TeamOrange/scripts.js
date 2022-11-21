const navRespnsive = document.querySelector((".navIconsContent"));
const navToggle = document.querySelector((".navHambuger"));

navToggle.addEventListener("click",openNav);
function openNav(){
    navRespnsive.classList.toggle("active");
    navToggle.classList.toggle("active");
}