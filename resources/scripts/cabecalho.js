const usuarioConfiguracaoView = document.querySelector(".usuario-configuracao");
const usuarioView = document.querySelector(".usuario");

usuarioView.addEventListener("click", function() {
    usuarioConfiguracaoView.classList.toggle("apresentar");
});
