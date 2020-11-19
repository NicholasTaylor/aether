const navTop = document.getElementById('nav-top');
const container = document.getElementById('container');
const navIcon = document.getElementById('nav-icon');
const navScreen = document.getElementById('nav-screen');
let navStatus = false;

const navChange = () => {
    let topName = !(navStatus) ? 'nav-top-on' : 'nav-top-off';
    let screenName = !(navStatus) ? 'nav-screen-on' : 'nav-screen-off';
    navTop.style.animationName = topName;
    navScreen.style.animationName = screenName;
    navStatus = !(navStatus);
}

navIcon.addEventListener('click', () => {
    navChange();
});

navScreen.addEventListener('click', () => {
    navChange();
});