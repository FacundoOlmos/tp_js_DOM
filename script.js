/*1-Generar un carrusel de imágenes: Utiliza el DOM para crear un carrusel de
imágenes que permite al usuario avanzar o retroceder entre imágenes.*/


let images = ["./imagenes/ANIMALS.jpg", "./imagenes/DARK.jpg", "./imagenes/DELICATE.jpg"];
let imagenActual = 0;

let prevButton = document.getElementById("prev-button");
let proxButton = document.getElementById("prox-button");
let carouselImage = document.getElementById("carousel-image");

prevButton.addEventListener("click", mostrarPrevImg);
proxButton.addEventListener("click", mostrarProxImg);

function mostrarPrevImg() {
    imagenActual = (imagenActual - 1 + images.length) % images.length;
    updateImage();
}

function mostrarProxImg() {
    imagenActual = (imagenActual + 1) % images.length;
    updateImage();
}

function updateImage() {
    carouselImage.src = images[imagenActual];
}

updateImage();

/*2-Texto que se lee más: Crea un botón que, al hacer clic, cambia el tamaño del texto
de un elemento en el DOM para que sea más grande o más pequeño.*/


let texto = document.getElementById("texto");
let aumentar = document.getElementById("aumentar");
let disminuir = document.getElementById("disminuir");


aumentar.addEventListener("click", () => {
    let original = window.getComputedStyle(texto).fontSize;
    texto.style.fontSize = (parseInt(original) + 2) + "px";
});

disminuir.addEventListener("click", () => {
    let original = window.getComputedStyle(texto).fontSize;
    texto.style.fontSize = (parseInt(original) - 2) + "px";
});

/*3-Tarjetas clickeables: Genera una serie de tarjetas en el DOM, cada una con un
contenido diferente. Permite que el usuario haga clic en una tarjeta para expandirla y
mostrar más detalles.*/

let imgContainers = document.querySelectorAll(".containerImagen");

imgContainers.forEach((container, index) => {
    let textoImg = container.querySelector(".descripcionImagen");

    container.addEventListener("click", () => {
        if (textoImg.style.display === "none") {
            textoImg.style.display = "block";
        } else {
            textoImg.style.display = "none";
        }
    });
});
