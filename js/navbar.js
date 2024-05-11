let navbar;

// populate variables once the page is loaded
window.addEventListener('load', () => {
    navbar = document.getElementById('navbar');
    create_navbar();
});

function create_navbar() {
    for(const child of navbar.children) {
        child.style.flexBasis = String(Math.floor(100/navbar.children.length)) + "%";
    }
}

function check_width() {
    if(window.innerWidth > 900) {
        navbar.classList = "navbar flex-container-row";
        for(const child of navbar.children) {
            child.style.flexBasis = String(Math.floor(100/navbar.children.length)) + "%";
        }
    } else {
        navbar.classList = "navbar flex-container-col";
        for(const child of navbar.children) {
            child.style.flexBasis = "100%";
        }
    }
}

window.onresize = check_width;