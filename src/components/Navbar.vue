<template>
  <header class="navbar">
    <div class="container">
      <div class="brand">🎀 SweetPaws Bakery</div>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/produk">Produk</RouterLink>
        <RouterLink to="/keranjang">Keranjang</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500&display=swap');

.navbar {
  background-color: #ffe4f1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  padding: 16px 0;
  font-family: 'Fredoka', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.brand {
  font-size: 20px;
  font-weight: bold;
  color: #e91e63;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-grow: 1;
}

.nav-links a {
  color: #d81b60;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ad1457;
}
</style>
