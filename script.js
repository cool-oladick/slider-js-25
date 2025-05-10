let slides = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];

let i = 0;

let slider = document.getElementById("slider");

function next() {
    if (i < slides.length - 1) {
        i++;
        console.log(i);
    } else {
        i = 0;
    }
    slider.setAttribute("src", slides[i]);
}

function prev() {
    if (i > 0) {
        i--;
        console.log(i);
    } else {
        i = slides.length - 1;
    }
    slider.setAttribute("src", slides[i]);
}