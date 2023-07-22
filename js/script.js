const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
  if (scrollY > 2) {
    navbar.classList.replace('bg-transparant', 'navbar-color');
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('navbar-color', 'bg-transparant');
  }
});
