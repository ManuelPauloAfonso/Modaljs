
const modal = document.querySelector('.modal-container');
const botaonAbrir = document.querySelector('.login-buttom');
const botaoFechar = document.querySelector('.fechar');

function abrirModal(event) {
    event.preventDefault();
    modal.classList.add('ativo', 'modal');
}

function fecharModal(event){
    event.preventDefault();
    modal.classList.remove('ativo');
}

botaoFechar.addEventListener('click', fecharModal);
botaonAbrir.addEventListener('click', abrirModal);