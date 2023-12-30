document.addEventListener("DOMContentLoaded", function () {
    const photo = document.getElementById("photo");

    // Quando o mouse está sobre a imagem
    photo.addEventListener("mouseover", function () {
        photo.classList.add("rotate"); // Adiciona a classe para iniciar a rotação
    });

    // Quando a animação de rotação termina
    photo.addEventListener("animationend", function () {
        photo.src = "foto2.png"; // Troca a foto
        photo.classList.remove("rotate"); // Remove a classe para interromper a rotação
    });

    // Quando o mouse sai da imagem
    photo.addEventListener("mouseout", function () {
        photo.src = "foto.png"; // Restaura a imagem original
        photo.classList.remove("rotate"); // Remove a classe para interromper a rotação
    });
});