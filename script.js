let slides = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
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
