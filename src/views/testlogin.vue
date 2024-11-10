
<template>
    <div>
      <h1 v-if="isLoggedIn">ยินดีต้อนรับ!</h1>
      <h1 v-else>กรุณาเข้าสู่ระบบ</h1>
      <button @click="toggleLogin">{{ isLoggedIn ? 'ออกจากระบบ' : 'เข้าสู่ระบบ' }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false, // ตัวแปรสำหรับตรวจสอบสถานะการเข้าสู่ระบบ
      };
    },
    methods: {
      toggleLogin() {
        this.isLoggedIn = !this.isLoggedIn; // สลับสถานะการเข้าสู่ระบบ
      },
    },
  };
  </script>
  
  