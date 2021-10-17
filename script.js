
const botaoabrir = document.querySelector('[data-modal] = "modal1"');
const botaofechar = document.querySelector('[data-modal] = "fechar"');
const containermodal = document.querySelector('[data-modal] = "container"');

function abrirModal(event) {
    event.preventDefault();
    containermodal.classList.add('ativo');
    

}
function fecharModal(event){
    event.preventDefault();
    containermodal.classList.remove('ativo');

}
botaoabrir.addEventListener('click', abrirModal());
botaofechar.addEventListener('click', fecharModal());
