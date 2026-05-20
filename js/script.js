/* ============================================
   CHURRASQUIN NORDESTINO - JAVASCRIPT
   Interatividade e Funcionalidades
   ============================================ */

// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página do Churrasquin Nordestino carregada!');
    
    initializeNavigation();
    initializeProductCards();
    initializeAnimations();
});

/* ============================================
   NAVEGAÇÃO SUAVE
   ============================================ */

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove classe ativa de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona classe ativa ao link clicado
            this.classList.add('active');
            
            // Obtém o alvo da navegação
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Scroll suave para a seção
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Adiciona destaque visual temporário
                highlightSection(targetSection);
            }
        });
    });
    
    // Atualiza navegação ao fazer scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.category-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   INTERATIVIDADE DOS PRODUTOS
   ============================================ */

function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        // Adiciona evento de clique
        card.addEventListener('click', function() {
            handleProductClick(this);
        });
        
        // Adiciona animação de entrada escalonada
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeIn 0.6s ease-in forwards';
        card.style.opacity = '0';
    });
}

function handleProductClick(card) {
    const productName = card.querySelector('.product-name').textContent;
    const productPrice = card.querySelector('.product-price').textContent;
    
    // Cria um efeito visual ao clicar
    createClickAnimation(card);
    
    // Mostra notificação
    showNotification(`${productName} adicionado ao carrinho!`, productPrice);
}

function createClickAnimation(element) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple-effect');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

/* ============================================
   NOTIFICAÇÕES
   ============================================ */

function showNotification(message, price) {
    // Remove notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Cria novo elemento de notificação
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <span class="notification-price">${price}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Anima a entrada
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ============================================
   DESTAQUE DE SEÇÃO
   ============================================ */

function highlightSection(section) {
    const originalBg = section.style.backgroundColor;
    
    section.style.backgroundColor = 'rgba(196, 30, 58, 0.1)';
    section.style.transition = 'background-color 0.5s ease';
    
    setTimeout(() => {
        section.style.backgroundColor = originalBg;
    }, 1500);
}

/* ============================================
   ANIMAÇÕES
   ============================================ */

function initializeAnimations() {
    // Observador de interseção para animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa todas as seções
    document.querySelectorAll('.category-section').forEach(section => {
        observer.observe(section);
    });
}

/* ============================================
   FUNCIONALIDADES EXTRAS
   ============================================ */

// Contagem de cliques em produtos
let cartCount = 0;

function addToCart() {
    cartCount++;
    updateCartDisplay();
}

function updateCartDisplay() {
    // Atualiza contador se houver elemento no DOM
    const cartElement = document.querySelector('.cart-count');
    if (cartElement) {
        cartElement.textContent = cartCount;
    }
}

// Função de busca (para implementação futura)
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    const results = [];
    
    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();
        
        if (name.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
            results.push(product);
        }
    });
    
    return results;
}

// Função para filtrar por preço
function filterByPrice(minPrice, maxPrice) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const priceText = product.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));
        
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Resetar filtro de preço
function resetPriceFilter() {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.style.display = 'block';
    });
}

/* ============================================
   ESTILOS DINÂMICOS PARA NOTIFICAÇÃO
   ============================================ */

const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #c41e3a 0%, #8B0000 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 1000;
        border: 2px solid rgba(255, 255, 255, 0.2);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-message {
        font-size: 0.95em;
    }
    
    .notification-price {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.9em;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        background-color: rgba(0, 0, 0, 0.3);
        border-bottom-color: white;
    }
    
    @media (max-width: 480px) {
        .notification {
            bottom: 10px;
            right: 10px;
            padding: 12px 15px;
            font-size: 0.9em;
        }
        
        .notification-message {
            font-size: 0.85em;
        }
    }
`;

document.head.appendChild(style);

/* ============================================
   LOG DE INICIALIZAÇÃO
   ============================================ */

console.log('%cChurasquin Nordestino', 'color: #c41e3a; font-size: 20px; font-weight: bold;');
console.log('%cSite carregado com sucesso!', 'color: #1a1a1a; font-size: 14px;');
console.log('Funções disponíveis: searchProducts(), filterByPrice(), resetPriceFilter()');
