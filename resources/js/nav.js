const navTop = document.querySelector('#nav-top');
const container = document.querySelector('#container');
const navIcon = document.querySelector('#nav-icon');
const navScreen = document.querySelector('#nav-screen');
const elemHeader = document.querySelector('header');
let winHeight = window.innerHeight;
let winScroll = window.scrollY;
let navStatus = false;
let headerStatus = false;

const navChange = () => {
    let topName = !(navStatus) ? 'nav-top-on' : 'nav-top-off';
    let screenName = !(navStatus) ? 'nav-screen-on' : 'nav-screen-off';
    navTop.style.animationName = topName;
    navScreen.style.animationName = screenName;
    navStatus = !(navStatus);
}

const sizeChange = () => {
    winHeight = window.innerHeight;
    winScroll = window.scrollY;
}

const scrollChange = () => {
    sizeChange();
    let tipPoint = Math.floor(winHeight / 4);
    if (winScroll >= tipPoint && headerStatus === false){
        elemHeader.style.animationName = 'desktop-nav-on'
        headerStatus = true;
    } else if (winScroll < tipPoint && headerStatus === true) {
        elemHeader.style.animationName = 'desktop-nav-off'
        headerStatus = false;
    }
}

navIcon.addEventListener('click', () => {
    navChange();
});

navScreen.addEventListener('click', () => {
    navChange();
});

window.addEventListener('scroll', () => {
    scrollChange();
});

window.addEventListener('load', () => {
    scrollChange();
});

window.addEventListener('resize', () => {
    scrollChange();
});