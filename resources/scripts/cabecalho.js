const usuarioConfiguracaoView = document.querySelector(".usuario-configuracao");
const usuarioView = document.querySelector(".usuario");

const perfilUsuarioLinkView = document.getElementById("perfil-usuario-link");
const usuarioConfiguracaoPerfilView = document.querySelector(".usuario-configuracao-perfil");

usuarioView.addEventListener("click", function() {
    usuarioConfiguracaoView.classList.toggle("apresentar");
});

perfilUsuarioLinkView.addEventListener("click", function() {
    usuarioConfiguracaoView.classList.remove("apresentar");
    usuarioConfiguracaoPerfilView.classList.toggle("apresentar-modal-perfil");    
});