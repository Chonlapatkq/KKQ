<template>
    <div class="register-container">
      <h1>Register</h1>
      <form @submit.prevent="register" class="register-form">
        <input type="text" v-model="username" placeholder="Username" required class="input-field">
        <input type="password" v-model="password" placeholder="Password" required class="input-field">
        <input type="email" v-model="email" placeholder="Email" required class="input-field">
        <button type="submit" class="register-button">Register</button>
      </form>
      <p class="login-link">Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: ''
      };
    },
    methods: {
      register() {
        console.log('Registering:', this.username, this.password, this.email);
        // Call API for registration
      }
    }
  };
  </script>
  
  <style>
  .register-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
  }
  
  .input-field {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .input-field:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .register-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .register-button:hover {
    background-color: #0056b3;
  }
  
  .login-link {
    text-align: center;
    margin-top: 10px;
    color: #666;
  }
  </style>