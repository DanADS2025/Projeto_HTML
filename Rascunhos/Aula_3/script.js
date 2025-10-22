document.addEventListener('DOMContentLoaded', ()=>{
    const containerPrincipal = document.querySelector('.container-principal')
    const btnAdcionar = document.querySelector('#btn-adcionar-cartão'); 

    if(containerPrincipal && btnAdcionar) {
    btnAdcionar.addEventListener('click', ()=> {
    const novoCartão = document.createElement('article');
        novoCartão.classList.add('cartão');
            novoCartão.innerHTML =
            <><h2>Novo Artigo</h2><p>Este é um novo artigo adicionado dinamicamente.</p></>
        ;
        containerPrincipal.appendChild(novoCartão);
    });
    }
});
