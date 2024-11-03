<template>
    <div class="login-container mt-4">
      <h1>Login</h1>
      <form @submit.prevent="login" class="login-form">
        <input type="text" v-model="username" placeholder="Username" required class="input-field">
        <input type="password" v-model="password" placeholder="Password" required class="input-field">
        <button type="submit" class="login-button">Login</button>
      </form>
      <p class="register-link">Don't have an account? <router-link to="/register">Register here</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Logging in:', this.username, this.password);
        // Call API for login
      }
    }
  };
  </script>
  
  <style>
  .login-container {
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
  
  .login-form {
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
  
  .login-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  .register-link {
    text-align: center;
    margin-top: 10px;
    color: #666;
  }
  </style>