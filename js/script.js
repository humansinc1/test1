//redirect buttons to the form input

document.getElementById("joinus-button").addEventListener('click', () => {
    document.getElementById('welcome-form-name').focus();
});
document.getElementById("menu-button-desktop").addEventListener('click', () => {
    document.getElementById('welcome-form-name').focus();
});
document.getElementById("menu-button-mobile").addEventListener('click', () => {
    document.getElementById('welcome-form-name').focus();
});

//sticky header changes on scroll
window.onscroll = function () {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo-link").style.display = "none";
        document.getElementById('menu-desktop').style.margin = "0 auto";
        document.getElementById('menu-items-desktop').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        document.getElementById("logo-link").style.display = "block";
        document.getElementById('menu-desktop').style.margin = "0";
        document.getElementById('menu-items-desktop').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
};

//menu mobile

function menuState() {
    var x = document.getElementById("menu-mobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }