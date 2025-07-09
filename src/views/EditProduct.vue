<template>
  <div class="edit-container">
    <div v-if="loading">Memuat data produk…</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="content">
      <div class="header">
        <h2>✏️ Edit Produk</h2>
        <button class="logout-btn" @click="logout" title="Keluar">🚪 Logout</button>
      </div>

      <form @submit.prevent="simpanPerubahan" class="form-edit">
        <label>Nama Kue</label>
        <input v-model="product.nama" type="text" required />

        <label>Harga (IDR)</label>
        <input v-model.number="product.harga" type="number" required />

        <label>Nama File Gambar</label>
        <input v-model="product.gambar" type="text" />

        <label>Deskripsi</label>
        <textarea v-model="product.deskripsi" rows="4"></textarea>

        <button type="submit">💾 Simpan Perubahan</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const product = ref(null)
const loading = ref(true)
const error   = ref('')

onMounted(async () => {
  try {
    const res = await fetch(`https://c2f11ffc-3860-4d52-8545-1615da252451-00-qwyg3qd01o5c.sisko.replit.dev/${route.params.id}`)
    if (!res.ok) throw new Error('Gagal mengambil data')
    const data = await res.json()

    if (data && data.id) {
      product.value = data
    } else {
      error.value = 'Produk tidak ditemukan.'
    }
  } catch (e) {
    error.value = 'Tidak bisa terhubung ke server.'
  } finally {
    loading.value = false
  }
})

async function simpanPerubahan() {
  await fetch(`http://localhost:3000/products/${route.params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product.value)
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

.edit-container {
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

h2 { color: #d63384; font-size: 24px; }

.logout-btn {
  background: #ffafcc; color:#fff; border:none;
  padding:10px 16px; border-radius:12px; font-weight:bold;
  cursor:pointer; transition:background .3s;
}
.logout-btn:hover { background:#ec407a; }

.form-edit { display:flex; flex-direction:column; }

label { margin-bottom:6px; font-weight:600; color:#444; font-size:14px; }
input, textarea {
  padding:10px 14px; margin-bottom:20px; border-radius:10px;
  border:1px solid #ccc; font-size:15px; background:#fff;
}
button[type="submit"] {
  padding:12px; background:#ff91b7; color:#fff; font-weight:bold;
  border:none; border-radius:16px; cursor:pointer; transition:background .3s;
  font-size:16px;
}
button[type="submit"]:hover { background:#ec407a; }
</style>
