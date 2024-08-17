let navbar;
let mobileHamburger;
let mainContent;
let isMobileOpen = true;

// populate variables once the page is loaded
window.addEventListener('load', () => {
    navbar = document.getElementById('navbar');
    mobileHamburger = document.getElementById('mobile-hamburger');
    mainContent = document.getElementById('main-content');
    check_width();
    mobileHamburger.addEventListener('click', () => {
        if(isMobileOpen === true) {
            close_mobile();
        } else {
            open_mobile();
        }
    });
    const hamburgerSize = Math.floor(32 * window.devicePixelRatio);
    // Set correct mobile hamburger height and width after load
    mobileHamburger.style.height = `${hamburgerSize}px`;
    mobileHamburger.style.width = `${hamburgerSize}px`;
    console.log(window.devicePixelRatio);
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
    // NO MOBILE
    console.log(window.innerWidth);
    if(window.innerWidth > (Math.floor(window.devicePixelRatio * 130) * navbar.children.length - 1)) {
        if(isMobileOpen === false) {
            open_mobile();
        }
        mobileHamburger.hidden = true;
        navbar.classList = 'navbar flex-container-row';
        navbar.style.position = 'static';
        mainContent.style.padding = '0';
        mainContent.style.paddingLeft = '15%';
        mainContent.style.paddingRight = '15%';
        // Maybe I should change the css?
        // This changes every navbarItem
        for(const child of navbar.children) {
            child.style.flexBasis = String(Math.floor(100/(navbar.children.length - 1))) + '%';
            child.style.fontSize = '24px';
        }
    } else {
        // YES MOBILE
        if(isMobileOpen === true) {
            close_mobile();
        }
        mobileHamburger.hidden = false;
        navbar.classList = 'navbar flex-container-col';
        navbar.style.position = 'fixed';
        mainContent.style.padding = '5%';
        mainContent.style.paddingTop = '48px';
        // This changes every navbarItem
        for(const child of navbar.children) {
            child.style.flexBasis = '100%';
            child.style.fontSize = '40px';
        }
    }
}

window.onresize = check_width;