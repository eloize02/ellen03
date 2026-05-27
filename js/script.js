document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('.menu-section');
    const linksNav = document.querySelectorAll('nav ul li a');

    // Função para gerenciar o comportamento de scroll dinâmico do menu
    window.addEventListener('scroll', () => {
        let secaoAtualId = '';

        secoes.forEach(secao => {
            const secaoTop = secao.offsetTop;
            // Define uma margem de detecção adaptada para a altura do menu fixo (sticky header)
            if (window.pageYOffset >= (secaoTop - 150)) {
                secaoAtualId = secao.getAttribute('id');
            }
        });

        // Atualiza a classe active para destacar visualmente no menu
        linksNav.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(secaoAtualId)) {
                link.classList.add('active');
            }
        });
    });
});