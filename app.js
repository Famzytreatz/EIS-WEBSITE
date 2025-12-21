// toggle menu bar
var navlinks = document.getElementById("navlinks");
function showMenu(){
    navlinks.style.right = "0";
}
function hideMenu(){
    navlinks.style.right = "-200px";
}
// toogle footer year
var year = document.getElementById("year").textContent = new Date().getFullYear();