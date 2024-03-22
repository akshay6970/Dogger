function openSidebar(){

    let sidebar = document.querySelector('.nav-links');
    sidebar.classList.add('openside-bar');
    // alert("hello");
}
function closeSidebar(){

    let sidebar = document.querySelector('.nav-links');
    sidebar.classList.remove('openside-bar');
    // alert("hello");
}

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function () { myFunction() };

    var navbar = document.querySelector(".navBar-section");
    var navbarCotainer = document.querySelector(".navbar-container");

    function myFunction() {
        if (window.pageYOffset >= 10) {
            navbar.classList.add("bg-color")
            navbarCotainer.classList.add("sticky")
        } else {
            navbar.classList.remove("bg-color");
            navbarCotainer.classList.remove("sticky");
        }
    }
});
