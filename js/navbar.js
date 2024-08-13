let navbar;
let mobileHamburger;
let isMobileOpen = true;

// populate variables once the page is loaded
window.addEventListener('load', () => {
    navbar = document.getElementById('navbar');
    mobileHamburger = document.getElementById('mobile-hamburger');
    check_width();
    mobileHamburger.addEventListener('click', () => {
        if(isMobileOpen === true) {
            close_mobile();
        } else {
            open_mobile();
        }
    });
});

function open_mobile() {
    navbar.style.padding = '2%';
    for(const child of navbar.children) {
        child.style.display = 'block';
    }
    isMobileOpen = true;
}

function close_mobile() {
    navbar.style.padding = '0';
    for(const child of navbar.children) {
        child.style.display = 'none';
    }
    isMobileOpen = false;
}

function check_width() {
    // by multiplying by devicePixelRatio we take into account high density screens
    if(window.innerWidth > (window.devicePixelRatio * 150 * navbar.children.length - 1)) {
        if(isMobileOpen === false) {
            open_mobile();
        }
        mobileHamburger.hidden = true;
        navbar.classList = "navbar flex-container-row";
        navbar.style.position = 'static';
        // Maybe I should change the css?
        for(const child of navbar.children) {
            child.style.flexBasis = String(Math.floor(100/(navbar.children.length - 1))) + "%";
        }
    } else {
        if(isMobileOpen === true) {
            close_mobile();
        }
        mobileHamburger.hidden = false;
        navbar.classList = "navbar flex-container-col";
        navbar.style.position = 'fixed';
        for(const child of navbar.children) {
            child.style.flexBasis = "100%";
        }
    }
}

window.onresize = check_width;