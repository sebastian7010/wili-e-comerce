document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
});

const carousels = [{
        id: 0,
        products: [
            { id: 1, name: "caja nucita", price: 90909090909 },
            { id: 2, name: "almendraz", price: 39999 },
            { id: 3, name: "anillo barbi", price: 59999 },
            { id: 4, name: "bianchi", price: 29999 },
            { id: 5, name: "bolsa bombombun", price: 49999 },
            { id: 6, name: "bolsa okaloca", price: 34999 },
            { id: 7, name: "bolsa trululu", price: 54999 },
            { id: 8, name: "bolsa jetgol", price: 44999 },
            { id: 9, name: "burbujet", price: 45999 },
            { id: 10, name: "cables ácidos", price: 39999 },
            { id: 11, name: "cables verdes", price: 35999 },
            { id: 12, name: "caja bubaloo mora", price: 28999 },
            { id: 13, name: "caja bubalu", price: 27999 },
            { id: 14, name: "caja cick", price: 26999 },
            { id: 15, name: "caja dr locko", price: 30999 },
            { id: 16, name: "caja jet", price: 33999 },
            { id: 17, name: "caja jumbo", price: 31999 },
            { id: 18, name: "caja lechera", price: 36999 },
            { id: 19, name: "caja mani", price: 37999 },
            { id: 20, name: "caja nucita avellana", price: 34300 },
            { id: 21, name: "caja nutella", price: 39999 },
            { id: 22, name: "caja pizza", price: 28999 },
            { id: 23, name: "caja rafaelo", price: 42999 },
            { id: 24, name: "caja splot", price: 29999 },
            { id: 25, name: "caja splot 2", price: 34999 },
            { id: 26, name: "caja traident mora", price: 24999 },
            { id: 27, name: "caja trident", price: 27999 },
            { id: 28, name: "canelazo", price: 25999 },
            { id: 29, name: "caramelo nucita", price: 25999 },
            { id: 30, name: "chao fresa", price: 30999 },
            { id: 31, name: "chao limon", price: 26999 },
            { id: 32, name: "choco brack", price: 27999 },
            { id: 33, name: "choco disck", price: 39999 },
            { id: 34, name: "choco italo", price: 29999 },
            { id: 35, name: "chocolate ferrero", price: 45999 },
            { id: 36, name: "chocorramo miti", price: 38999 },
            { id: 37, name: "choco stop", price: 36999 },
            { id: 38, name: "cintas ácidas", price: 31999 },
            { id: 39, name: "dulce zandía", price: 33999 },
            { id: 40, name: "espumoso blanco + chocolate blanco", price: 28999 },
            { id: 41, name: "espumoso + chocolate", price: 30999 },
            { id: 42, name: "espumoso", price: 29999 },
            { id: 43, name: "festables", price: 35999 },
            { id: 44, name: "galletas nucita", price: 39999 },
            { id: 45, name: "mentas hielo", price: 27999 },
            { id: 46, name: "mix 3", price: 39999 },
            { id: 47, name: "mix 4", price: 41999 },
            { id: 48, name: "mix 6", price: 41999 },
            { id: 49, name: "mix x3 lecheras", price: 36999 },
            { id: 50, name: "okaloca bolsa xs", price: 29999 },
            { id: 51, name: "okaloca polvo caja", price: 31999 },
            { id: 52, name: "ponkis", price: 32999 },
            { id: 53, name: "rafael x3", price: 45999 },
            { id: 54, name: "revolcón", price: 34999 },
            { id: 55, name: "tarro nucita", price: 39999 },
            { id: 56, name: "trident fresa", price: 29999 },
            { id: 57, name: "trident mix 4", price: 31999 },
            { id: 58, name: "trident caja", price: 34999 },
            { id: 59, name: "trululu g", price: 30999 },
            { id: 60, name: "uvas chevres", price: 36999 },
            { id: 61, name: "almendras xl", price: 29999 },
            { id: 62, name: "caja festables", price: 31999 },
            { id: 63, name: "caja punch", price: 32999 },
            { id: 64, name: "jumbo", price: 45999 },
            { id: 65, name: "festables rojos", price: 34999 },
            { id: 66, name: "festables mani", price: 39999 },
            { id: 67, name: "festables mora", price: 29999 },
            { id: 68, name: "hair heads", price: 31999 },
            { id: 69, name: "jumbo naranaja", price: 34999 },
            { id: 71, name: "choco bueno", price: 30999 },
            { id: 72, name: "kit kat x4", price: 29999 },
            { id: 73, name: "kinder x4", price: 31999 },
            { id: 74, name: "ponkis", price: 32999 },
            { id: 75, name: "nerds redonda", price: 45999 },
            { id: 76, name: "happy blue", price: 34999 },
            { id: 77, name: "tetero mora", price: 39999 },
            { id: 78, name: "tetero azul", price: 29999 },
            { id: 79, name: "tetero rojo", price: 31999 },
            { id: 80, name: "clicle ball blue", price: 34999 }
        ],
        currentPage: 0,
        productsPerPage: 12
    },
    {
        id: 1,
        products: [
            { id: 81, name: "7 cera capilar", price: 79999 },
            { id: 82, name: "labial", price: 89999 },
            { id: 83, name: "bolso tomy", price: 69999 },
            { id: 84, name: "splash body", price: 79999 },
            { id: 85, name: "cajas", price: 49999 },
            { id: 86, name: "cámara facial", price: 69999 },
            { id: 87, name: "cartera tomy", price: 39999 },
            { id: 88, name: "cera capilar", price: 59999 },
            { id: 89, name: "cera kit capilar", price: 99999 },
            { id: 90, name: "gel de ducha", price: 49999 },
            { id: 91, name: "jabón baño", price: 54999 },
            { id: 92, name: "jabón baño 2", price: 29999 },
            { id: 93, name: "jabón baño 3", price: 19999 },
            { id: 94, name: "jabón baño 5", price: 79999 },
            { id: 95, name: "jabón baño 6", price: 24999 },
            { id: 96, name: "jabón baño 7", price: 14999 },
            { id: 97, name: "jabón baño 8", price: 89999 },
            { id: 98, name: "jabón baño 9", price: 34999 },
            { id: 99, name: "kit 9 cera capilar", price: 99999 },
            { id: 100, name: "labial", price: 10999 },
            { id: 101, name: "labial rosa", price: 8999 },
            { id: 102, name: "loción body", price: 11999 },
            { id: 103, name: "masajeador capilar", price: 16999 },
            { id: 104, name: "moña 1", price: 59999 },
            { id: 105, name: "moña 10", price: 79999 },
            { id: 106, name: "moña 11", price: 19999 },
            { id: 107, name: "moña 2", price: 45999 },
            { id: 108, name: "moña 3", price: 32999 },
            { id: 109, name: "moña 4", price: 29999 },
            { id: 110, name: "moña 5", price: 26999 },
            { id: 111, name: "moña 6", price: 37999 },
            { id: 112, name: "moña 7", price: 19999 },
            { id: 113, name: "moña 9", price: 45999 },
            { id: 114, name: "moñas", price: 37999 },
            { id: 115, name: "splash body", price: 19999 },
            { id: 116, name: "splash body 2", price: 31999 },
            { id: 117, name: "splash body 3", price: 31999 },
            { id: 118, name: "splash body 4", price: 34999 },
            { id: 119, name: "splash body 5", price: 34999 },
            { id: 120, name: "splash body 6", price: 36999 },
            { id: 121, name: "toallita aironman", price: 36999 },
            { id: 122, name: "toallita capitán", price: 39999 },
            { id: 123, name: "toallita encanto", price: 39999 },
            { id: 124, name: "toallita mikie", price: 39999 },
            { id: 125, name: "toallita mini", price: 41999 },
            { id: 126, name: "toallita princesa", price: 41999 },
            { id: 127, name: "toallita spiderman", price: 43999 },
            { id: 128, name: "toallita thor", price: 43999 },
            { id: 129, name: "tomy verde", price: 45999 },
            { id: 130, name: "tomy azul", price: 45999 }
        ],

        currentPage: 0,
        productsPerPage: 12
    },
    {
        id: 2,
        products: [
            { id: 131, name: "ancheta grande", price: 89999 },
            { id: 132, name: "mix 4 gomas", price: 79999 },
            { id: 133, name: "ancheta de caja", price: 89999 },
            { id: 134, name: "ancheta xs", price: 69999 },
            { id: 135, name: "ancheta baso 1", price: 79999 },
            { id: 136, name: "ancheta baso 2", price: 89999 },
            { id: 137, name: "ancheta baso 3", price: 69999 },
            { id: 138, name: "ancheta baso 4", price: 89999 },
            { id: 139, name: "ancheta roja", price: 89999 },

        ],
        currentPage: 0,
        productsPerPage: 12
    }
];

let cart = {};

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product product-${product.id}`;
    card.innerHTML = `
        <div class="product-image"></div>
        <p class="price price-${product.id}">COP ${product.price.toLocaleString()}</p>
        <div class="quantity">
            <button onclick="changeQuantity(this, -1)">-</button>
            <span>0</span>
            <button onclick="changeQuantity(this, 1)">+</button>
        </div>
        <button class="buy-btn" onclick="buyProduct('${product.name}', this)">Comprar</button>
    `;
    return card;
}

function renderCarousel(carousel) {
    const carouselRow1 = document.getElementById(`carousel-row-1-${carousel.id}`);
    const carouselRow2 = document.getElementById(`carousel-row-2-${carousel.id}`);
    if (!carouselRow1 || !carouselRow2) {
        console.error(`Carousel rows not found for carousel ${carousel.id}`);
        return;
    }
    carouselRow1.innerHTML = '';
    carouselRow2.innerHTML = '';

    const startIndex = carousel.currentPage * carousel.productsPerPage;
    const endIndex = startIndex + carousel.productsPerPage;
    const pageProducts = carousel.products.slice(startIndex, endIndex);

    pageProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        if (index < 6) {
            carouselRow1.appendChild(productCard);
        } else {
            carouselRow2.appendChild(productCard);
        }
    });
}

function nextPage(carouselId) {
    const carousel = carousels.find(c => c.id === carouselId);
    const totalPages = Math.ceil(carousel.products.length / carousel.productsPerPage);
    carousel.currentPage = (carousel.currentPage + 1) % totalPages;
    renderCarousel(carousel);
}

function prevPage(carouselId) {
    const carousel = carousels.find(c => c.id === carouselId);
    const totalPages = Math.ceil(carousel.products.length / carousel.productsPerPage);
    carousel.currentPage = (carousel.currentPage - 1 + totalPages) % totalPages;
    renderCarousel(carousel);
}

function changeQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('span');
    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(0, quantity + change);
    quantitySpan.textContent = quantity;

    const productCard = button.closest('.product');
    const productId = productCard.className.split('-')[1];
    const carouselId = productCard.closest('.carousel').id.split('-')[1];
    const product = carousels[carouselId].products.find(p => p.id == productId);

    if (!cart[carouselId]) {
        cart[carouselId] = {};
    }

    if (quantity > 0) {
        cart[carouselId][productId] = { name: product.name, quantity: quantity };
    } else {
        delete cart[carouselId][productId];
        if (Object.keys(cart[carouselId]).length === 0) {
            delete cart[carouselId];
        }
    }

    updateCartItemCount();
}

function updateCartItemCount() {
    const totalItems = Object.values(cart).reduce((total, carouselProducts) =>
        total + Object.values(carouselProducts).reduce((sum, product) => sum + product.quantity, 0), 0
    );
    document.getElementById('cartItemCount').textContent = totalItems;
}

function buyProduct(productName, button) {
    const quantitySpan = button.parentElement.querySelector('.quantity span');
    const quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
        const message = encodeURIComponent(`Hola, quiero comprar ${quantity} unidades de ${productName}`);
        window.open(`https://wa.me/573237342020?text=${message}`, '_blank');
    } else {
        alert('Por favor, seleccione al menos una unidad para comprar.');
    }
}

function sendCombinedWhatsAppMessage() {
    if (Object.keys(cart).length === 0) {
        alert('Por favor, seleccione al menos un producto antes de enviar el mensaje.');
        return;
    }

    let message = "Hola, quiero comprar los siguientes productos:\n\n";

    Object.entries(cart).forEach(([carouselId, products]) => {
        message += `Carrusel ${parseInt(carouselId) + 1}:\n`;
        Object.values(products).forEach(product => {
            message += `- ${product.quantity} unidades de ${product.name}\n`;
        });
        message += "\n";
    });

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573237342020?text=${encodedMessage}`, '_blank');
}

function handleResize() {
    const width = window.innerWidth;
    let newProductsPerPage;
    if (width < 576) {
        newProductsPerPage = 2;
    } else if (width < 768) {
        newProductsPerPage = 4;
    } else if (width < 992) {
        newProductsPerPage = 6;
    } else if (width < 1200) {
        newProductsPerPage = 8;
    } else {
        newProductsPerPage = 12;
    }

    carousels.forEach(carousel => {
        carousel.productsPerPage = newProductsPerPage;
        renderCarousel(carousel);
    });
}

function initializeCarousels() {
    handleResize();
    carousels.forEach(carousel => renderCarousel(carousel));
}

window.addEventListener('resize', handleResize);