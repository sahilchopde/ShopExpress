/* script.js
   Implements product rendering, cart logic, search, modal control,
   theme toggle, LocalStorage persistence and a small checkout stub.
*/

/* -------------------------
   Example product data
   ------------------------- */
const products = [
  { id: 'p1', title: 'Wireless Headphones', price: 2499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKzHvBY3bUo5fU8s_qWW3Oys2tX8eJ6a-ng&s', desc: 'Comfortable over-ear with noise isolation.' },
  { id: 'p2', title: 'Smart Watch', price: 4999, img: 'https://wallpapers.com/images/featured/smartwatch-background-w7kkzxvni88w4elh.webp', desc: 'Activity tracking, notifications & 7-day battery.' },
  { id: 'p3', title: 'Portable Speaker', price: 1999, img: 'data:image/jpeg;base64,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', desc: 'Compact with rich sound and 10hr playtime.' },
  { id: 'p4', title: 'Leather Wallet', price: 899, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_XP9PfJaFruMhmuzbr_WHLma3dDpDM704g&s', desc: 'Minimalist wallet with RFID protection.' },
  { id: 'p5', title: 'Sunglasses', price: 1299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiyogs6-fvsV6rEZviqMn-Cmw4uKP9qhTbA&s', desc: 'UV400 protection with polarized lenses.' },
  { id: 'p6', title: 'Backpack', price: 3499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlASxrhRELu-dKr9FmS0Qq0iRTOAKpUl3BcA&s', desc: 'Water-resistant, laptop compartment.' }
];

/* utility: format currency (INR shown) */
const fmt = v => `₹${v.toFixed(2)}`;

/* -------------------------
   Local storage keys
   ------------------------- */
const CART_KEY = 'sx_cart_v1';
const THEME_KEY = 'sx_theme_v1';

/* state: cart is an object id -> {id, qty} */
let cart = loadCart();

/* DOM refs */
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const clearCart = document.getElementById('clearCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const productModal = document.getElementById('productModal');
const productDetail = document.getElementById('productDetail');
const productTitle = document.getElementById('productTitle');
const closeProduct = document.getElementById('closeProduct');
const addFromModal = document.getElementById('addFromModal');
const searchInput = document.getElementById('search');
const themeToggle = document.getElementById('themeToggle');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const yearEl = document.getElementById('year');

/* set footer year */
yearEl.textContent = new Date().getFullYear();

/* generate placeholder images using simple SVG dataURLs */
function placeholderSVG(text = '') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200'><rect width='100%' height='100%' fill='#eef6ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='#0366d6'>${text}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* -------------------------
   Render products
   ------------------------- */
function renderProducts(list = products) {
  productGrid.innerHTML = '';
  list.forEach(p => {
    // create card
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-thumb"><img src="${p.img || placeholderSVG(p.title)}" alt="${p.title}"></div>
      <h3 class="title">${p.title}</h3>
      <p class="muted" style="color:var(--muted);margin:0.25rem 0">${p.desc}</p>
      <div class="price-row">
        <div>
          <div class="price">${fmt(p.price)}</div>
          <div class="muted" style="font-size:0.85rem">Inclusive of taxes</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.4rem;align-items:flex-end">
          <button class="btn add" data-id="${p.id}">Add</button>
          <button class="btn secondary details" data-id="${p.id}">Details</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // wire buttons
  document.querySelectorAll('.add').forEach(b => b.addEventListener('click', e => {
    const id = e.currentTarget.dataset.id;
    addToCart(id, 1);
  }));
  document.querySelectorAll('.details').forEach(b => b.addEventListener('click', e => {
    const id = e.currentTarget.dataset.id;
    openProductModal(id);
  }));
}

/* -------------------------
   Cart functions
   ------------------------- */
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load cart', e);
    return {};
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  refreshCartUI();
}

function addToCart(id, qty = 1) {
  if (!cart[id]) cart[id] = { id, qty: 0 };
  cart[id].qty += qty;
  if (cart[id].qty < 1) delete cart[id];
  saveCart();
  // small feedback
  flashButton(cartBtn, 'Added');
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
}

function updateQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  if (!cart[id]) cart[id] = { id, qty: 0 };
  cart[id].qty = qty;
  saveCart();
}

/* compute total and render cart contents */
function refreshCartUI() {
  // cart list
  cartItems.innerHTML = '';
  const ids = Object.keys(cart);
  let total = 0;
  ids.forEach(id => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const item = cart[id];
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div class="cart-thumb"><img src="${p.img || placeholderSVG(p.title)}" alt="${p.title}" style="width:100%;height:100%;object-fit:contain"></div>
      <div style="flex:1">
        <div style="font-weight:600">${p.title}</div>
        <div style="color:var(--muted);font-size:0.9rem">${fmt(p.price)} each</div>
      </div>
      <div style="text-align:right">
        <div class="qty">
          <button class="qty-dec" data-id="${id}">−</button>
          <div style="padding:0 0.6rem">${item.qty}</div>
          <button class="qty-inc" data-id="${id}">+</button>
        </div>
        <div style="margin-top:0.45rem;font-weight:700">${fmt(p.price * item.qty)}</div>
        <div style="margin-top:0.35rem"><button class="btn small remove" data-id="${id}">Remove</button></div>
      </div>
    `;
    cartItems.appendChild(row);
    total += p.price * item.qty;
  });

  cartTotal.textContent = fmt(total);
  cartCount.textContent = ids.reduce((s, id) => s + cart[id].qty, 0);

  // wire quantity and remove buttons
  document.querySelectorAll('.qty-inc').forEach(b => b.addEventListener('click', e => {
    const id = e.currentTarget.dataset.id;
    updateQty(id, cart[id].qty + 1);
  }));
  document.querySelectorAll('.qty-dec').forEach(b => b.addEventListener('click', e => {
    const id = e.currentTarget.dataset.id;
    updateQty(id, cart[id].qty - 1);
  }));
  document.querySelectorAll('.remove').forEach(b => b.addEventListener('click', e => {
    const id = e.currentTarget.dataset.id;
    removeFromCart(id);
  }));
}

/* utils */
function flashButton(btn, text) {
  const orig = btn.innerHTML;
  btn.innerHTML = text;
  setTimeout(() => btn.innerHTML = orig, 900);
}

/* -------------------------
   Modals
   ------------------------- */
function openCart() {
  refreshCartUI();
  cartModal.classList.remove('hidden');
}
function closeCartModal() { cartModal.classList.add('hidden'); }
cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartModal);
clearCart.addEventListener('click', () => {
  cart = {};
  saveCart();
});
checkoutBtn.addEventListener('click', () => {
  cartModal.classList.add('hidden');
  checkoutModal.classList.remove('hidden');
});

/* product modal */
let activeProductId = null;
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  activeProductId = id;
  productTitle.textContent = p.title;
  productDetail.innerHTML = `
    <div class="product-thumb" style="height:120px"><img src="${p.img || placeholderSVG(p.title)}" alt="${p.title}" /></div>
    <div>
      <div style="font-weight:700">${fmt(p.price)}</div>
      <p class="desc" style="margin:0.5rem 0">${p.desc}</p>
      <div style="color:var(--muted);font-size:0.9rem">Fast delivery • 7-day returns</div>
    </div>
  `;
  productModal.classList.remove('hidden');
}
closeProduct.addEventListener('click', () => productModal.classList.add('hidden'));
addFromModal.addEventListener('click', () => {
  if (!activeProductId) return;
  addToCart(activeProductId, 1);
  productModal.classList.add('hidden');
});

/* checkout modal */
closeCheckout.addEventListener('click', () => checkoutModal.classList.add('hidden'));
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Very simple "order placed" simulation
  const data = new FormData(checkoutForm);
  const summary = {
    name: data.get('name'),
    email: data.get('email'),
    address: data.get('address'),
    items: cart
  };
  console.log('Order', summary);
  alert('Order placed!');
  cart = {}; saveCart();
  checkoutModal.classList.add('hidden');
});

/* -------------------------
   Search filter
   ------------------------- */
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { renderProducts(); return; }
  const filtered = products.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  renderProducts(filtered);
});

/* -------------------------
   Theme toggle
   ------------------------- */
function applyTheme(theme) {
  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem(THEME_KEY, theme);
}
themeToggle.addEventListener('click', () => {
  const current = document.body.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved);
})();

/* -------------------------
   Init
   ------------------------- */
function init() {
  // render initial product list
  renderProducts();

  // wire closing modals when clicking outside content
  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', (ev) => {
      if (ev.target === m) m.classList.add('hidden');
    });
  });

  // initial cart UI
  refreshCartUI();
}

/* run */
init();
