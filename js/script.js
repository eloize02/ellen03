document.addEventListener("DOMContentLoaded", function() {
    // 1. Efeito de scroll suave refinado ao clicar nas categorias
    const linksCategorias = document.querySelectorAll('.menu-categorias a');
    
    linksCategorias.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Compensa a altura do menu fixo (sticky) para não cobrir o título da seção
            const menuHeight = document.querySelector('.menu-categorias').offsetHeight;
            const targetPosition = targetSection.offsetTop - menuHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // 2. Animação suave (Fade-in) ao rolar a página para ver os produtos
    const cards = document.querySelectorAll('.produto-card');
    
    const fecharAnimacao = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        // Define o estado inicial da animação via JS para não quebrar caso o JS esteja desativado
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        fecharAnimacao.observe(card);
    });
});