// HTML elements
let navbar;
let mobileHamburger;
let mainContent;
let flex_row_cont;
let flex_col_cont;

let isMobileOpen = true;

let hamburgerSize;

// populate variables once the page is loaded
window.addEventListener('load', () => {
    navbar = document.getElementById('navbar');
    mobileHamburger = document.getElementById('mobile-hamburger');
    mainContent = document.getElementById('main-content');
    flex_row_cont = document.getElementsByClassName('flex-container-row');
    flex_col_cont = document.getElementsByClassName('flex-container-col');
    hamburgerSize = 32;//Math.floor(32 * window.devicePixelRatio);
    // Set correct mobile hamburger height and width after load
    mobileHamburger.style.height = `${hamburgerSize}px`;
    mobileHamburger.style.width = `${hamburgerSize}px`;
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
    console.log("DPR: ", window.devicePixelRatio);
    console.log("InnerWidth: ", window.innerWidth);

    // NO MOBILE
    if(window.innerWidth > Math.max(window.devicePixelRatio * 400.0, Math.min(window.devicePixelRatio * 800.0, (Math.floor(window.devicePixelRatio * 70) * navbar.children.length - 1)))) {
        if(isMobileOpen === false) {
            open_mobile();
        }
        mobileHamburger.hidden = true;
        navbar.classList = 'navbar flex-container-row';
        for(const col of flex_col_cont) {
            col.classList.remove('flex-container-col');
            col.classList.add('flex-container-row');
        }
        // Maybe I should change the css?
        // This changes every navbarItem
        for(const child of navbar.children) {
            child.style.flexBasis = String(Math.floor(100/(navbar.children.length - 1))) + '%';
            child.style.fontSize = '18px';
        }
    } else {
        // YES MOBILE
        if(isMobileOpen === true) {
            close_mobile();
        }
        mobileHamburger.hidden = false;
        navbar.classList = 'navbar flex-container-col';
        mainContent.style.paddingTop = `${hamburgerSize + 16}px`;
        for(const row of flex_row_cont) {
            row.classList.remove('flex-container-row');
            row.classList.add('flex-container-col');
        }
        // This changes every navbarItem
        for(const child of navbar.children) {
            child.style.flexBasis = '100%';
            child.style.fontSize = '30px';
        }
    }
}

window.onresize = check_width;