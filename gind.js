function showCustomAlert(message, isSuccess = true) {
  // Hapus popup lama jika ada
  const existing = document.querySelector('.popup-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const box = document.createElement('div');
  box.className = 'popup-box';
  box.style.cssText = `
    background: white;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
    max-width: 90%;
    width: 320px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    font-family: sans-serif;
    animation: fadeIn 0.3s ease;
  `;

  const title = document.createElement('h2');
  title.innerText = isSuccess ? 'Berhasil!' : 'Gagal!';
  title.style.cssText = `
    margin: 0 0 10px;
    font-size: 20px;
    color: ${isSuccess ? '#2c3e50' : '#e74c3c'};
  `;

  const text = document.createElement('p');
  text.innerText = message;
  text.style.cssText = `
    margin: 0 0 16px;
    font-size: 16px;
    color: #444;
  `;

  const button = document.createElement('button');
  button.innerText = 'Tutup';
  button.onclick = () => document.body.removeChild(overlay);
  button.style.cssText = `
    background: ${isSuccess ? '#16a085' : '#e74c3c'};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s ease;
  `;
  button.onmouseover = () => button.style.background = isSuccess ? '#12876f' : '#c0392b';
  button.onmouseout = () => button.style.background = isSuccess ? '#16a085' : '#e74c3c';

  box.appendChild(title);
  box.appendChild(text);
  box.appendChild(button);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#000000',
          secondary: '#FACC15',
          accent: '#3B82F6',
          danger: '#EF4444',
          neon: '#00F5FF',
        },
        fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
          body: ['Poppins', 'sans-serif'],
        },
      }
    }
  }
    
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
    
    const products = [
      {
        id: 1,
        name: "Kaos 24s ",
        category: "crew",
        price: 65000,
        image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Hitam", "Putih", "Abu", "Navy"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 2,
        name: "Sablon Depan dan Belakang",
        category: "hoodie",
        price: 85000,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Hitam", "Abu", "Maroon", "Biru"],
        sizes: ["M", "L", "XL", "XXL"]
      },
      {
        id: 3,
        name: "Sablon Depan dan Belakang",
        category: "Couple",
        price: 160000,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Putih", "Hitam", "Biru", "Hijau"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 4,
        name: "Kaos 30s ",
        category: "crew",
        price: 60000,
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Putih", "Hitam", "Abu", "Merah"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Sablon Satu titik",
        category: "Couple",
        price: 65000,
        image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Hitam", "Abu", "Krem", "Biru"],
        sizes: ["M", "L", "XL", "XXL"]
      },
      {
        id: 6,
        name: "Sablon Satu titik",
        category: "hoodie",
        price: 120000,
        image: "https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Putih", "Hitam", "Biru", "Merah"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
        name: "Kaos Polo",
        category: "polo",
        price: 65000,
        image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Hitam", "Abu", "Krem", "Biru"],
        sizes: ["M", "L", "XL", "XXL"]
      },
      {
        id: 6,
        name: "Kemeja",
        category: "polo",
        price: 120000,
        image: "https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Putih", "Hitam", "Biru", "Merah"],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 6,
        name: "Jersey",
        category: "polo",
        price: 120000,
        image: "https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        colors: ["Putih", "Hitam", "Biru", "Merah"],
        sizes: ["S", "M", "L", "XL"]
      },
      
    ];
    
    // Generate product cards
    function generateProductCards(filter = 'all') {
      const productsContainer = document.querySelector('#products .grid');
      productsContainer.innerHTML = '';
      
      const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
      
      filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = `product-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition duration-300 ease-in-out`;
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-delay', (index % 3) * 100);
        
        productCard.innerHTML = `
          <div class="relative overflow-hidden h-64">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover hover:scale-105 transition duration-500">
            <div class="absolute top-3 right-3 bg-secondary text-black text-xs font-bold px-2 py-1 rounded">
              ${product.category === 'crew' ? 'Dapatkan diskon Hanya Hari ini' : product.category === 'hoodie' ? 'Dapatkan diskon Hanya Hari ini' : 'Dapatkan diskon Hanya Hari ini' }
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-heading text-xl font-bold text-black dark:text-white mb-2">${product.name}</h3>
            <div class="flex items-center mb-3">
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-black dark:text-white">Rp ${product.price.toLocaleString()}</span>
              <button class="add-to-cart bg-secondary hover:bg-yellow-400 text-black font-medium py-2 px-4 rounded-lg transition duration-300" data-id="${product.id}">
                <i class="fas fa-shopping-cart mr-2"></i> Pesan
              </button>
            </div>
          </div>
        `;
        
        productsContainer.appendChild(productCard);
      });
    }
    
    // Initialize product cards
    document.addEventListener('DOMContentLoaded', () => {
      generateProductCards();
      
      // Filter products
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          filterButtons.forEach(btn => {
            btn.classList.remove('bg-secondary', 'text-black');
            btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
          });
          
          button.classList.add('bg-secondary', 'text-black');
          button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
          
          generateProductCards(button.dataset.filter);
        });
      });
      
      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      
      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
      
      // Theme toggle
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;
      
      // Check for saved theme preference or use system preference
      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      
      themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
      });
      
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active-nav');
            });
            
            this.classList.add('active-nav');
          }
        });
      });
      
      // Back to top button
      const backToTopButton = document.getElementById('back-to-top');
      
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.remove('opacity-100', 'visible');
          backToTopButton.classList.add('opacity-0', 'invisible');
        }
      });
      
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Form submission
      const orderForm = document.getElementById('order-form');
      
      orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simple validation
        if (!data.name || !data.email || !data.phone || !data.product || !data.size || !data.quantity) {
          alert('Harap isi semua field yang wajib diisi!');
          return;
        }
        
        // In a real app, you would send this data to a server
        console.log('Order submitted:', data);
        
        // Show success message
        alert('Pesanan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.');
        
        // Reset form
        orderForm.reset();
      });
      
      // Add to cart functionality
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
          const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
          const productId = button.dataset.id;
          const product = products.find(p => p.id == productId);
          
          
          // Scroll to order form
          document.querySelector('#order').scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

     // Redeem code functionality
  const redeemForm = document.getElementById('redeem-form');
  const redeemCodeInput = document.getElementById('redeem-code');
  const originalPriceElement = document.getElementById('original-price');
  const discountedPriceElement = document.getElementById('discounted-price');
  const discountInfoElement = document.getElementById('discount-info');
  
  let discountApplied = false;
  
  redeemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const code = redeemCodeInput.value.trim();
    
    if (code === 'GINDXSINTESA2025') {
      discountApplied = true;
      redeemCodeInput.classList.remove('border-red-500');
      redeemCodeInput.classList.add('border-green-500');
      
      // Update price display if already calculated
      if (originalPriceElement.textContent !== 'Rp 0') {
        applyDiscount();
      }
      
      // Show success message
      showCustomAlert('Kode diskon berhasil diterapkan! diskon telah terekam di server. silahkan memesan ', true);
    } else {
      discountApplied = false;
      redeemCodeInput.classList.add('border-red-500');
      showCustomAlert('Kode diskon tidak valid. Silakan coba lagi.', false);
    }
  });
  
  function applyDiscount() {
    const originalPriceText = originalPriceElement.textContent.replace('Rp ', '').replace(/\./g, '');
    const originalPrice = parseInt(originalPriceText);
    
    if (discountApplied && originalPrice > 0) {
      const discountedPrice = originalPrice * 0.8;       
      originalPriceElement.classList.add('line-through', 'text-red-500', 'dark:text-red-400');
      originalPriceElement.classList.remove('text-black', 'dark:text-white');
      
      discountedPriceElement.textContent = 'Rp ' + discountedPrice.toLocaleString('id-ID');
      discountedPriceElement.classList.remove('hidden');
    } else {
      originalPriceElement.classList.remove('line-through', 'text-red-500', 'dark:text-red-400');
      originalPriceElement.classList.add('text-black', 'dark:text-white');
      
      discountedPriceElement.classList.add('hidden');
    }
  }
  
  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
      
      // Update active tab button
      tabButtons.forEach(btn => {
        btn.classList.remove('active-tab', 'border-secondary', 'text-secondary');
        btn.classList.add('text-black', 'dark:text-white');
      });
      
      button.classList.add('active-tab', 'border-secondary', 'text-secondary');
      button.classList.remove('text-black', 'dark:text-white');
      
      // Show selected tab content
      tabContents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active-tab-content');
      });
      
      document.getElementById(tabId).classList.remove('hidden');
      document.getElementById(tabId).classList.add('active-tab-content');
    });
  });
  
  // Update price when product or quantity changes
  const productSelect = document.getElementById('product');
  const quantityInput = document.getElementById('quantity');
  
  function calculatePrice() {
    const product = productSelect.value;
    const quantity = parseInt(quantityInput.value) || 0;
    
    let pricePerItem = 0;
    
    switch(product) {
      case 'crewneck': pricePerItem = 85000; break;
      case 'hoodie': pricePerItem = 180000; break;
      case 'polo': pricePerItem = 120000; break;
      case 'Couple':pricePerItem = 90000; break;
      case 'raglan': pricePerItem = 95000; break;
      default: pricePerItem = 0;
    }
    
    const totalPrice = pricePerItem * quantity;
    
    if (totalPrice > 0) {
      originalPriceElement.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');
      
      if (discountApplied) {
        applyDiscount();
      } else {
        originalPriceElement.classList.remove('line-through', 'text-red-500', 'dark:text-red-400');
        originalPriceElement.classList.add('text-black', 'dark:text-white');
        discountedPriceElement.classList.add('hidden');
      }
    } else {
      originalPriceElement.textContent = 'Rp 0';
      originalPriceElement.classList.remove('line-through', 'text-red-500', 'dark:text-red-400');
      originalPriceElement.classList.add('text-black', 'dark:text-white');
      discountedPriceElement.classList.add('hidden');
    }
  }
  
  productSelect.addEventListener('change', calculatePrice);
  quantityInput.addEventListener('input', calculatePrice);
