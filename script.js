var typed = new Typed(".typing", {
    strings: [" Custom Web Developer", "Wordpress Developer", "Wix Web Designer" , "UI/UX Designer", "Freelancer", "Video Editor"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".preloader").style.opacity = 0;
        document.querySelector(".preloader").style.pointerEvents = "none";
        document.querySelector(".content").style.display = "block";
        }, 3000);
});
