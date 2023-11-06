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

let texto = document.getElementById("texto");
let aumentar = document.getElementById("aumentar");
let disminuir = document.getElementById("disminuir");

// Función para aumentar el tamaño del texto
aumentar.addEventListener("click", () => {
    let original = window.getComputedStyle(texto).fontSize;
    texto.style.fontSize = (parseInt(original) + 2) + "px";
});

// Función para reducir el tamaño del texto
disminuir.addEventListener("click", () => {
    let original = window.getComputedStyle(texto).fontSize;
    texto.style.fontSize = (parseInt(original) - 2) + "px";
});
