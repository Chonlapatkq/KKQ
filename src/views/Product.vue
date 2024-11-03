<template>
    <div class="product-container">
      <h1 class="header">Product ขนมไทย</h1>
      <div class="product-row">
        <!-- แถวแรก สำหรับสินค้า 1-4 -->
        <div v-for="product in products.slice(0, 4)" :key="product.id" class="product-card">
          <img :src="require(`@/assets/${product.image}`)" alt="Product Image" class="product-image" />
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">{{ product.price }} THB</p>
        </div>
      </div>
      <div class="product-row">
        <!-- แถวที่สอง สำหรับสินค้า 5-8 -->
        <div v-for="product in products.slice(4, 8)" :key="product.id" class="product-card">
          <img :src="require(`@/assets/${product.image}`)" alt="Product Image" class="product-image" />
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">{{ product.price }} THB</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, title: 'ขนมชั้น', description: 'ขนมชั้นเนื้อนุ่ม', price: 100, image: '1.jpg' },
          { id: 2, title: 'ทองหยิบ', description: 'ทองหยิบหวานหอม', price: 200, image: '2.jpg' },
          { id: 3, title: 'ทองหยอด', description: 'ทองหยอดชุ่มฉ่ำ', price: 300, image: '3.jpg' },
          { id: 4, title: 'ฝอยทอง', description: 'ฝอยทองกรอบหวาน', price: 400, image: '4.jpg' },
          { id: 5, title: 'บัวลอย', description: 'บัวลอยนุ่มๆ ในกะทิ', price: 150, image: '5.jpg' },
          { id: 6, title: 'ขนมตาล', description: 'ขนมตาลหวานหอม', price: 120, image: '6.jpg' },
          { id: 7, title: 'ขนมครก', description: 'ขนมครกกรอบนอกนุ่มใน', price: 180, image: '7.jpg' },
          { id: 8, title: 'ลอดช่อง', description: 'ลอดช่องหวานเย็นชื่นใจ', price: 130, image: '8.jpg' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .product-row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px; /* เพิ่มระยะห่างระหว่างแถว */
  }
  
  .product-card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    margin: 10px;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    max-height: 200px; /* ปรับขนาดภาพสูงสุด */
  }
  
  .product-title {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .product-description {
    font-size: 1em;
    color: #666;
  }
  
  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }
  </style>
  