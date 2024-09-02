const usuarioConfiguracaoView = document.querySelector(".usuario-configuracao");
const usuarioView = document.querySelector(".usuario");

const perfilUsuarioLinkView = document.getElementById("perfil-usuario-link");
const usuarioConfiguracaoPerfilView = document.querySelector(".usuario-configuracao-perfil");

const modalBotaoCancelarView = document.getElementById("modal-botao-cancelar");

const riSearchLineView = document.querySelector(".ri-search-line");
const campoPesquisarView = document.querySelector(".campo-pesquisar");

const fecharCampoPesquisaView = document.getElementById("fechar-campo-pesquisa");

usuarioView.addEventListener("click", function() {
    usuarioConfiguracaoView.classList.toggle("apresentar");
});

perfilUsuarioLinkView.addEventListener("click", function() {
    usuarioConfiguracaoView.classList.remove("apresentar");
    usuarioConfiguracaoPerfilView.classList.toggle("apresentar-modal-perfil");    
});

modalBotaoCancelarView.addEventListener("click", () => {
    usuarioConfiguracaoPerfilView.classList.remove("apresentar-modal-perfil");
});

riSearchLineView.addEventListener("click", function() {
    campoPesquisarView.classList.add("apresentarCampoPesquisar");
});

fecharCampoPesquisaView.addEventListener("click", () => {
    campoPesquisarView.classList.toggle("apresentarCampoPesquisar");
});