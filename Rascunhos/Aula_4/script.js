document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.form-container');
    const mensagemStatus = document.querySelector('#mensagem-status');

    if (formulario && mensagemStatus) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = formulario.querySelector('#nome').value.trim();
            const email = formulario.querySelector('#email').value.trim();
            const mensagem = formulario.querySelector('#mensagem').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                mensagemStatus.textContent = 'Por favor, preencha todos os campos.';
                mensagemStatus.style.color = 'red';
            } else {
                // Aqui você deve adicionar o código para enviar a mensagem (ex: via AJAX)
                mensagemStatus.textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';
                mensagemStatus.style.color = 'green';
                formulario.reset(); // Limpa o formulário após o envio
            }
        });
    }
});
