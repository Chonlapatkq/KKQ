<template>
    <div>
      <h2>ระบบตัดเกรด</h2>
      
      <!-- Input สำหรับรับคะแนน -->
      <input type="number" v-model="score" placeholder="กรอกคะแนน" />
  
      <!-- ปุ่มคำนวณเกรด -->
      <button @click="calculateGrade">คำนวณเกรด</button>
  
      <!-- แสดงผลลัพธ์เกรด -->
      <p v-if="grade !== ''">เกรดของคุณ: {{ grade }}</p>
  
      <!-- แสดงข้อความแจ้งเตือนเมื่อมีข้อผิดพลาด -->
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        score: '',      // เก็บค่าคะแนนจากผู้ใช้
        grade: '',      // เก็บผลลัพธ์เกรดที่คำนวณได้
        errorMessage: '' // ข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
      }
    },
    methods: {
      calculateGrade() {
        // ตรวจสอบว่าผู้ใช้กรอกคะแนนหรือไม่
        if (this.score === '') {
          this.errorMessage = 'กรุณากรอกคะแนนก่อนคำนวณ';
          this.grade = ''; // ล้างค่าเกรดที่คำนวณไว้
          return;
        }
        
        // แปลง score เป็นตัวเลข
        const score = Number(this.score);
  
        // ตรวจสอบว่าคะแนนเกิน 100 หรือไม่
        if (score > 100) {
          this.errorMessage = 'กรุณากรอกคะแนนให้ถูกต้อง (0-100)';
          this.grade = ''; // ล้างค่าเกรดที่คำนวณไว้
          return;
        }
  
        // รีเซ็ตข้อความแจ้งเตือน
        this.errorMessage = '';
  
        // ตรวจสอบคะแนนและกำหนดเกรด
        if (score >= 80) {
          this.grade = 'A';
        } else if (score >= 70) {
          this.grade = 'B';
        } else if (score >= 60) {
          this.grade = 'C';
        } else if (score >= 50) {
          this.grade = 'D';
        } else {
          this.grade = 'F';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* สไตล์เพิ่มเติม */
  input, button {
    margin: 5px;
    padding: 8px;
    font-size: 16px;
  }
  </style>
  