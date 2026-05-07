const botaoMenu = document.getElementById('botaoMenu');
const listaNavegacao = document.getElementById('listaNavegacao');

botaoMenu.addEventListener('click', () => {
    listaNavegacao.classList.toggle('ativo');
    botaoMenu.classList.toggle('ativo');
});

document.querySelectorAll('.link-navegacao').forEach(link => {
    link.addEventListener('click', () => {
        listaNavegacao.classList.remove('ativo');
        botaoMenu.classList.remove('ativo');
    });
});

document.addEventListener('click', (e) => {
    if (!botaoMenu.contains(e.target) && !listaNavegacao.contains(e.target)) {
        listaNavegacao.classList.remove('ativo');
        botaoMenu.classList.remove('ativo');
    }
});
