var image_gallery;
var host_head;

var fullscreen_element;

// change to "" for testing
var path_to_common = "common/"

// populate variables once the page is loaded
window.onload = () => {
    image_gallery = document.getElementById("image-gallery");
    host_head = document.head;
}

window.addEventListener("load", () => {
    for (const child of document.getElementsByClassName("image-preview"))
    {
        console.log(child);
        child.addEventListener("click", function() {
            load_fullscreen(child.src);
        });
    }
});

function close_fullscreen() {
    fullscreen_element.innerHTML = "";
}

function load_fullscreen(src) {
    // request image-full-screen component
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/image-full-screen.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return; // or whatever error handling you want
        // add head to main head
        var doc = new DOMParser().parseFromString(this.responseText, 'text/html');
        host_head.innerHTML += '<link rel="stylesheet" type="text/css" href="' + path_to_common + 'css/image-full-screen.css' + '">';
        // add component body to full-screen-image-holder
        fullscreen_element = document.getElementById('full-screen-image-holder');
        fullscreen_element.innerHTML = doc.body.innerHTML;
        document.getElementById("image-full-screen").src = src;
        fullscreen_element.addEventListener("click", function() {
            close_fullscreen();
        });
    };
    xhr.send();
}
