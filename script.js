function greetUser() {
    alert("Hello! Welcome to the AYP Gainesville Youth website");
}

// Stops the videos from playing when moving to another slide //
document.addEventListener("DOMContentLoaded", function() {
    let carousel = document.getElementById('carouselExample');

    carousel.addEventListener('slid.bs.carousel', function() {
        let iframes = carousel.querySelectorAll("iframe");
        iframes.forEach(iframe => {
            let src = iframe.src;
            iframe.src = src; // Reloads the iframe to stop the video
        });
    });
});
