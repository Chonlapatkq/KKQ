<template>
    <div class="container vh-100 col-md-4">
      <br>
      <h2>เพิ่มข้อมูลสินค้า</h2>
      <form @submit.prevent="addProduct">
        <div class="text-start">
          <label for="name">ชื่อสินค้า:</label>
          <input v-model="newProduct.name" id="name" ref="nameInput" class="form-control" required />
        </div>
        <div class="text-start">
          <label for="price">ราคา:</label>
          <input type="number" v-model="newProduct.price" id="price" class="form-control" required />
        </div>
        <div class="text-start">
          <label for="quantity">จำนวนสินค้า:</label>
          <input type="number" v-model="newProduct.quantity" id="quantity" class="form-control" required min="1" />
        </div>
        <button type="submit" class="btn btn-primary my-4">{{ isEditing ? 'แก้ไขสินค้า' : 'เพิ่มสินค้า' }}</button>
      </form>
  
      <h2 v-if="products.length > 0">รายการสินค้า</h2>
      <table v-if="products.length > 0">
        <thead>
          <tr>
            <th>ชื่อสินค้า</th>
            <th>ราคาต่อชิ้น</th>
            <th>จำนวน</th>
            <th>ราคารวมสินค้า</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price * product.quantity }}</td>
            <td>
              <button @click="editProduct(index)" class="btn btn-warning btn-sm">แก้ไข</button>
              <button @click="removeProduct(index)" class="btn btn-danger btn-sm ml-2">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="products.length > 0" class="mt-4">
        <h4>ราคาสรุป: {{ totalPrice }}</h4>
      </div>
  
      <!-- Modal สำหรับการแก้ไขสินค้า -->
      <div v-if="isEditing" class="modal fade show" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true" style="display: block;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">แก้ไขสินค้า</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateProduct">
                <div class="mb-3">
                  <label for="editName" class="form-label">ชื่อสินค้า:</label>
                  <input v-model="newProduct.name" id="editName" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label for="editPrice" class="form-label">ราคา:</label>
                  <input type="number" v-model="newProduct.price" id="editPrice" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label for="editQuantity" class="form-label">จำนวนสินค้า:</label>
                  <input type="number" v-model="newProduct.quantity" id="editQuantity" class="form-control" required min="1" />
                </div>
                <button type="submit" class="btn btn-primary">บันทึกการแก้ไข</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const products = ref([]); // รายการสินค้า
      const newProduct = ref({ name: '', price: 0, quantity: 1 }); // ข้อมูลสินค้าใหม่หรือที่กำลังแก้ไข
      const isEditing = ref(false); // ตรวจสอบว่าเป็นโหมดแก้ไขหรือไม่
      const editingIndex = ref(null); // เก็บตำแหน่งสินค้าที่กำลังแก้ไข
  
      // ฟังก์ชันสำหรับการเพิ่มสินค้า
      const addProduct = () => {
        if (newProduct.value.name && newProduct.value.price && newProduct.value.quantity > 0) {
          if (isEditing.value) {
            // ถ้าอยู่ในโหมดแก้ไข, อัพเดตสินค้า
            products.value[editingIndex.value] = { ...newProduct.value };
            isEditing.value = false; // เปลี่ยนโหมดกลับเป็นเพิ่มสินค้า
          } else {
            // ถ้าไม่ใช่โหมดแก้ไข, เพิ่มสินค้าใหม่
            products.value.push({ ...newProduct.value });
          }
          newProduct.value = { name: '', price: 0, quantity: 1 }; // ล้างฟอร์ม
        }
      };
  
      // ฟังก์ชันแก้ไขสินค้า
      const editProduct = (index) => {
        newProduct.value = { ...products.value[index] }; // กำหนดค่าของสินค้าจากที่เลือก
        editingIndex.value = index; // เก็บตำแหน่งของสินค้าที่จะถูกแก้ไข
        isEditing.value = true; // เปิดโหมดแก้ไข
      };
  
      // ฟังก์ชันอัพเดตข้อมูลสินค้าที่ถูกแก้ไข
      const updateProduct = () => {
        if (newProduct.value.name && newProduct.value.price && newProduct.value.quantity > 0) {
          products.value[editingIndex.value] = { ...newProduct.value }; // อัพเดตข้อมูลสินค้า
          newProduct.value = { name: '', price: 0, quantity: 1 }; // ล้างฟอร์ม
          closeModal();
        }
      };
  
      // ฟังก์ชันลบสินค้า
      const removeProduct = (index) => {
        products.value.splice(index, 1); // ลบสินค้าตามตำแหน่ง index
      };
  
      // คำนวณราคาสรุปทั้งหมด
      const totalPrice = computed(() => {
        return products.value.reduce((acc, product) => {
          return acc + (product.price * product.quantity); // คำนวณราคาทั้งหมด
        }, 0);
      });
  
      // ฟังก์ชันปิด Modal
      const closeModal = () => {
        isEditing.value = false;
      };
  
      return {
        products,
        newProduct,
        addProduct,
        editProduct,
        updateProduct,
        removeProduct,
        totalPrice,
        isEditing,
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  /* ปรับสไตล์ให้ดูสวยงามมากขึ้น */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  button {
    padding: 5px 10px;
  }
  
  .modal.show {
    display: block !important;
  }
  </style>
  