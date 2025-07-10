<template>
  <div class="add-container">
    <div class="header">
      <h2>➕ Tambah Produk Baru</h2>
      <button class="logout-btn" @click="logout" title="Keluar dari Admin">🚪 Logout</button>
    </div>

    <form @submit.prevent="tambahProduk" class="form-tambah">
      <label>Nama Kue</label>
      <input v-model="nama" type="text" placeholder="Contoh: Cupcake Stroberi" required />

      <label>Harga (Rp)</label>
      <input v-model="harga" type="number" placeholder="Contoh: 15000" required />

      <label>Nama File Gambar</label>
      <input v-model="gambar" type="text" placeholder="Contoh: cupcake.jpg" />

      <label>Deskripsi</label>
      <textarea v-model="deskripsi" rows="4" placeholder="Deskripsikan kuemu..."></textarea>

      <button type="submit">🍰 Tambahkan Produk</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nama = ref('')
const harga = ref(0)
const gambar = ref('')
const deskripsi = ref('')

async function tambahProduk() {
  await fetch('https://c2f11ffc-3860-4d52-8545-1615da252451-00-qwyg3qd01o5c.sisko.replit.dev/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nama: nama.value,
      harga: harga.value,
      gambar: gambar.value,
      deskripsi: deskripsi.value
    })
  })
  router.push('/admin')
}

function logout() {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.add-container {
  font-family: 'Fredoka', sans-serif;
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #ffeaf4, #fff0f6);
  border-radius: 20px;
  box-shadow: 0 10px 24px rgba(255, 182, 193, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

h2 {
  color: #d63384;
  font-size: 24px;
}

.logout-btn {
  background-color: #ffafcc;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background-color: #ec407a;
}

.form-tambah {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #444;
  font-size: 14px;
}

input,
textarea {
  padding: 10px 14px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 15px;
  background-color: #fff;
}

button[type="submit"] {
  padding: 12px;
  background-color: #ff91b7;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #ec407a;
}
</style>
