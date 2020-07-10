const navbar = document.getElementById('navbar');
const body = document.getElementsByTagName('BODY')[0];

const navHeight = navbar.offsetHeight;

body.style.paddingTop = navHeight.toString() + 'px';
