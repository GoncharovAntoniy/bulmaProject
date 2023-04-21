burger.onclick = function myFunction() {
    var x = document.getElementById('navbarBasicExample')
    if (x.className === "navbar-menu") {
        x.className += " responsive";
    }
    else (x.className = "navbar-menu")
}