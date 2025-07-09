<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Login</h2>
      <p class="subtitle">Log in to your SweetPaws account!</p>

      <form @submit.prevent="handleLogin">
        <label>Email</label>
        <input v-model="username" type="text" placeholder="Enter your email" required />

        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>

    <footer>
      © 2025 <span class="brand">SweetPaws 🎂</span> | All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function handleLogin() {
  if (username.value === 'admin' && password.value === 'admin') {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/admin')
  } else {
    error.value = 'Email atau password salah.'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.login-page {
  font-family: 'Fredoka', sans-serif;
  background-color: #fffafc;
  padding-bottom: 100px; /* ruang agar konten tidak tertutup footer */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-container {
  background-color: #ffffff;
  margin-top: 60px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  text-align: center;
}

h2 {
  color: #e91e63;
  margin-bottom: 10px;
}

.subtitle {
  color: #777;
  font-size: 14px;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  margin: 8px 0 4px;
  color: #444;
  font-size: 14px;
}

input {
  padding: 10px 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

button {
  margin-top: 15px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #f48fb1;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #ec407a;
}

.error {
  color: red;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 0;
  background-color: #f8bbd0;
  text-align: center;
  font-size: 14px;
  color: #555;
  z-index: 100;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
}

footer .brand {
  color: #e91e63;
  font-weight: bold;
}
</style>
