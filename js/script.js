const menuItems = [
    // CHURRASCO
    {
        id: 1,
        category: "churrasco",
        name: "Picanha Premium",
        desc: "Corte nobre suculento com sal grosso e farofa",
        price: "R$ 89,90",
        img: "https://source.unsplash.com/random/600x400/?picanha"
    },
    {
        id: 2,
        category: "churrasco",
        name: "Costela Bovina",
        desc: "Costela assada lentamente com tempero nordestino",
        price: "R$ 69,90",
        img: "https://source.unsplash.com/random/600x400/?costela"
    },
    {
        id: 3,
        category: "churrasco",
        name: "Frango à Passarinho",
        desc: "Pedaços crocantes temperados com alho e pimenta",
        price: "R$ 45,90",
        img: "https://source.unsplash.com/random/600x400/?chicken"
    },
    {
        id: 4,
        category: "churrasco",
        name: "Linguiça Artesanal",
        desc: "Linguiça caseira com toque de cebola e pimenta",
        price: "R$ 39,90",
        img: "https://source.unsplash.com/random/600x400/?sausage"
    },
    {
        id: 5,
        category: "churrasco",
        name: "Carne de Sol Grelhada",
        desc: "Tradicional carne de sol com manteiga de garrafa",
        price: "R$ 59,90",
        img: "https://source.unsplash.com/random/600x400/?carne-de-sol"
    },
    {
        id: 6,
        category: "churrasco",
        name: "Maminha na Brasa",
        desc: "Maminha macia com molho barbecue caseiro",
        price: "R$ 79,90",
        img: "https://source.unsplash.com/random/600x400/?beef"
    },
    {
        id: 7,
        category: "churrasco",
        name: "Espetinho Misto",
        desc: "Carne, frango e linguiça no espeto",
        price: "R$ 29,90",
        img: "https://source.unsplash.com/random/600x400/?skewer"
    },
    {
        id: 8,
        category: "churrasco",
        name: "Pernil Suíno",
        desc: "Pernil assado com ervas finas",
        price: "R$ 65,90",
        img: "https://source.unsplash.com/random/600x400/?pork"
    },

    // PETISCOS
    {
        id: 9,
        category: "petiscos",
        name: "Torresmo Crocante",
        desc: "Torresmo pururuca com limão",
        price: "R$ 32,90",
        img: "https://source.unsplash.com/random/600x400/?pork-rind"
    },
    {
        id: 10,
        category: "petiscos",
        name: "Queijo Coalho Assado",
        desc: "Espetinhos de queijo coalho com melado",
        price: "R$ 28,90",
        img: "https://source.unsplash.com/random/600x400/?cheese"
    },
    {
        id: 11,
        category: "petiscos",
        name: "Bolinho de Carne Seca",
        desc: "Bolinho recheado com carne seca desfiada",
        price: "R$ 35,90",
        img: "https://source.unsplash.com/random/600x400/?fritter"
    },
    {
        id: 12,
        category: "petiscos",
        name: "Batata Frita com Bacon",
        desc: "Porção generosa com cheddar e bacon",
        price: "R$ 31,90",
        img: "https://source.unsplash.com/random/600x400/?fries"
    },
    {
        id: 13,
        category: "petiscos",
        name: "Aipim Frito",
        desc: "Mandioca frita com sal e pimenta",
        price: "R$ 24,90",
        img: "https://source.unsplash.com/random/600x400/?cassava"
    },
    {
        id: 14,
        category: "petiscos",
        name: "Anéis de Cebola",
        desc: "Revestidos com massa crocante",
        price: "R$ 26,90",
        img: "https://source.unsplash.com/random/600x400/?onion-rings"
    },
    {
        id: 15,
        category: "petiscos",
        name: "Coxinha de Frango",
        desc: "Porção com 8 unidades",
        price: "R$ 29,90",
        img: "https://source.unsplash.com/random/600x400/?coxinha"
    },

    // BEBIDAS
    {
        id: 16,
        category: "bebidas",
        name: "Caipirinha Tradicional",
        desc: "Cachaça, limão e açúcar",
        price: "R$ 18,90",
        img: "https://source.unsplash.com/random/600x400/?caipirinha"
    },
    {
        id: 17,
        category: "bebidas",
        name: "Cerveja Brahma 600ml",
        desc: "Geladíssima",
        price: "R$ 14,90",
        img: "https://source.unsplash.com/random/600x400/?beer"
    },
    {
        id: 18,
        category: "bebidas",
        name: "Suco de Maracujá",
        desc: "Natural 500ml",
        price: "R$ 12,90",
        img: "https://source.unsplash.com/random/600x400/?juice"
    },
    {
        id: 19,
        category: "bebidas",
        name: "Refrigerante 2L",
        desc: "Coca-Cola, Guaraná ou Sprite",
        price: "R$ 15,90",
        img: "https://source.unsplash.com/random/600x400/?soda"
    },
    {
        id: 20,
        category: "bebidas",
        name: "Água de Coco",
        desc: "Coco verde natural",
        price: "R$ 9,90",
        img: "https://source.unsplash.com/random/600x400/?coconut"
    },
    {
        id: 21,
        category: "bebidas",
        name: "Whisky Red Label",
        desc: "Dose 50ml",
        price: "R$ 22,90",
        img: "https://source.unsplash.com/random/600x400/?whiskey"
    }
];

// Renderizar cards
function renderMenu() {
    const categories = {
        churrasco: document.getElementById('grid-churrasco'),
        petiscos: document.getElementById('grid-petiscos'),
        bebidas: document.getElementById('grid-bebidas')
    };

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="menu-item-content">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
                <div class="price">${item.price}</div>
            </div>
        `;
        categories[item.category].appendChild(card);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    
    // Smooth scroll para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});