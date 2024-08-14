let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const size = document.getElementById('size').value;
    let existingProduct = cart.find(product => product.name === productName && product.size === size);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, size: size, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
    cartCount.innerText = itemCount;
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay();
}

document.addEventListener('DOMContentLoaded', loadCart);
