
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
          "id": 1,
          "name": "Kaos",
          "category": "crew",
          "price": 45000,
          "image": "asset/gambar_pesanan/db.jpg",
          "colors": ["Hitam", "Putih", "Abu", "Navy"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 2,
          "name": "Dtf Sablon Depan dan Belakang",
          "category": "hoodie",
          "price": 60000,
          "image": "asset/gambar_pesanan/db2.jpg",
          "colors": ["Hitam", "Abu", "Maroon", "Biru"],
          "sizes": ["M", "L", "XL", "XXL"]
        },
        {
          "id": 3,
          "name": "Polo Bordir",
          "category": "polo",
          "price": 60000,
          "image": "asset/gambar_pesanan/polobordir.jpg",
          "colors": ["Putih", "Hitam", "Biru", "Hijau"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 4,
          "name": "Jersey Atasan",
          "category": "Jersey",
          "price": 80000,
          "image": "asset/gambar_pesanan/Jersey atasan.jpg",
          "colors": ["Putih", "Hitam", "Abu", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 5,
          "name": " Jersey Atasan dan bawahan",
          "category": "Jersey",
          "price": 125000,
          "image": "asset/gambar_pesanan/atas bawah.jpg",
          "colors": ["Putih", "Hitam", "Abu", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 6,
          "name": "Dtf Sablon Satu titik",
          "category": "hoodie",
          "price": 65000,
          "image": "asset/gambar_pesanan/1st.jpg",
          "colors": ["Hitam", "Abu", "Krem", "Biru"],
          "sizes": ["M", "L", "XL", "XXL"]
        },
        {
          "id": 7,
          "name": "PDH",
          "category": "Couple",
          "price": 120000,
          "image": "asset/gambar_pesanan/pdh.jpg",
          "colors": ["Putih", "Hitam", "Biru", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 8,
          "name": "Polo sablon dtf",
          "category": "polo",
          "price": 80000,
          "image": "asset/gambar_pesanan/polodtf.jpg",
          "colors": ["Hitam", "Abu", "Krem", "Biru"],
          "sizes": ["M", "L", "XL", "XXL"]
        },
        {
          "id": 9,
          "name": "Sweater",
          "category": "Sweater",
          "price": 148000,
          "image": "asset/gambar_pesanan/sweater.jpg",
          "colors": ["Putih", "Hitam", "Biru", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 10,
          "name": "Kemeja Custom",
          "category": "Couple",
          "price": 90000,
          "image": "asset/gambar_pesanan/pdh.png",
          "colors": ["Putih", "Hitam", "Biru", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 11,
          "name": "Hoodie",
          "category": "hdi",
          "price": 173000,
          "image": "asset/gambar_pesanan/hoodie.jpg",
          "colors": ["Putih", "Hitam", "Biru", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "id": 12,
          "name": "Zip Hoodie",
          "category": "hdi",
          "price": 183000,
          "image": "asset/gambar_pesanan/zip.jpg",
          "colors": ["Putih", "Hitam", "Biru", "Merah"],
          "sizes": ["S", "M", "L", "XL"]
        }
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
              <span class="text-lg font-bold text-black dark:text-white">Start from Rp ${product.price.toLocaleString()}</span>
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
         
         // Show success alert
         alert('Kode diskon berhasil diterapkan! Anda mendapatkan diskon.');
       } else {
         discountApplied = false;
         redeemCodeInput.classList.add('border-red-500');
         alert('Kode diskon tidak valid. Silakan coba lagi.');
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
