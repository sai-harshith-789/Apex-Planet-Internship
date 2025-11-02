
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 299, img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 349, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 3, title: "1984", author: "George Orwell", price: 259, img: "https://images.unsplash.com/photo-1551022370-8e6eaffd6c1b" },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", price: 199, img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" }
];

// Display books
const bookContainer = document.getElementById('books');
books.forEach(book => {
  const div = document.createElement('div');
  div.classList.add('book');
  div.innerHTML = `
    <img src="${book.img}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <p>₹${book.price}</p>
    <button onclick="addToCart(${book.id})">Add to Cart</button>
  `;
  bookContainer.appendChild(div);
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add book to cart
function addToCart(id) {
  const book = books.find(b => b.id === id);
  cart.push(book);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

// Update cart
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      ${item.title} - ₹${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = `Total: ₹${total}`;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

document.getElementById('clear-cart').addEventListener('click', () => {
  cart = [];
  localStorage.removeItem('cart');
  updateCart();
});

updateCart();
