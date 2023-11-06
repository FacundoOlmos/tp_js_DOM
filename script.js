const images = ["./imagenes/ANIMALS.jpg", "./imagenes/DARK.jpg", "./imagenes/DELICATE.jpg"];
let currentImageIndex = 0;

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const carouselImage = document.getElementById("carousel-image");

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    carouselImage.src = images[currentImageIndex];
}

updateImage(); // Mostrar la primera imagen al cargar la página

let verMasBtn = document.getElementById("ver-mas-btn");
let verMenosBtn = document.getElementById("ver-menos-btn");
let moreTexto = document.getElementById("mas");

verMasBtn.addEventListener("click", function () {
    moreTexto.classList.remove("ocultar");
    verMasBtn.classList.add("ocultar");
    verMenosBtn.classList.remove("ocultar");
});

verMenosBtn.addEventListener("click", function () {
    moreTexto.classList.add("ocultar");
    verMasBtn.classList.remove("ocultar");
    verMenosBtn.classList.add("ocultar");
});
