<template>
  <div class="admin-container">
    <div class="header">
      <h2>🎂 Dashboard Admin</h2>
      <router-link to="/admin/produk/tambah" class="btn-tambah">➕ Tambah Produk</router-link>
    </div>

    <ul class="product-list">
      <li v-for="item in products" :key="item.id" class="product-item">
        <div class="info">
          <strong>{{ item.nama }}</strong>
          <span> Rp{{ item.harga.toLocaleString() }}</span>
        </div>
        <router-link :to="`/admin/produk/edit/${item.id}`" class="btn-edit">✏️ Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(async () => {
  const res = await fetch('https://c2f11ffc-3860-4d52-8545-1615da252451-00-qwyg3qd01o5c.sisko.replit.dev/')
  products.value = await res.json()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.admin-container {
  font-family: 'Fredoka', sans-serif;
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #ffeaf4, #fff1f9);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(255, 182, 193, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

h2 {
  color: #e91e63;
  font-size: 24px;
}

.btn-tambah {
  background-color: #ff8fb3;
  color: white;
  padding: 10px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn-tambah:hover {
  background-color: #f368e0;
}

.product-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff0f6;
  padding: 12px 20px;
  border-radius: 14px;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(255, 192, 203, 0.2);
}

.info {
  display: flex;
  flex-direction: column;
}

.btn-edit {
  background-color: #ffd6e6;
  color: #d63384;
  padding: 6px 16px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn-edit:hover {
  background-color: #ffc0dd;
}
</style>
