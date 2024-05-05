const host_head = document.head;

function load_fullscreen() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/image-full-screen.html', true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        // add body to full-screen-image-holder
        var doc = new DOMParser().parseFromString(this.responseText, 'text/html');
        document.getElementById('full-screen-image-holder').innerHTML= doc.body.innerHTML;
        // add head to main head
        host_head.innerHTML += doc.head.innerHTML;
    };
    xhr.send();
}
