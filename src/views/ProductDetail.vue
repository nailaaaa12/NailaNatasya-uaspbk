<template>
  <div v-if="product" class="detail-container">
    <div class="detail-card">
      <div class="image-wrapper">
        <img
          :src="`/images/${product.gambar}`"
          :alt="product.nama"
          class="cake-image"
        />
      </div>

      <div class="info">
        <h2>{{ product.nama }}</h2>
        <p class="deskripsi">{{ product.deskripsi }}</p>
        <p class="harga"><strong>{{ product.harga.toLocaleString() }} IDR</strong></p>
        <button @click="tambahKeKeranjang" class="tambah-btn">🍰 Tambahkan ke Keranjang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/store/cart'

const route = useRoute()
const product = ref(null)
const cart = useCartStore()

onMounted(async () => {
  const res = await fetch(`https://c2f11ffc-3860-4d52-8545-1615da252451-00-qwyg3qd01o5c.sisko.replit.dev/products${route.params.id}`)
  product.value = await res.json()
})

function tambahKeKeranjang() {
  cart.addToCart({
    id: product.value.id,
    nama: product.value.nama,
    harga: product.value.harga,
    gambar: product.value.gambar
  })
}
</script>
<!-- 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.detail-container {
  font-family: 'Fredoka', sans-serif;
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
}

.detail-card {
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(135deg, #ffeaf4, #fff0f6);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(255, 182, 193, 0.25);
  padding: 30px;
  align-items: center;
  gap: 30px;
}

/* Bungkus gambar agar ukurannya terkendali */
.image-wrapper {
  flex-shrink: 0;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  border: 2px dashed #f78fb3;
}

.cake-image {
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border-radius: 12px;
}


.info {
  flex: 1;
  text-align: left;
}

h2 {
  color: #d63384;
  font-size: 22px;
  margin-bottom: 10px;
}

.deskripsi {
  font-size: 15px;
  color: #555;
  margin-bottom: 10px;
}

.harga {
  font-size: 17px;
  color: #ff5f8f;
  margin-bottom: 20px;
}

.tambah-btn {
  background-color: #ffaad4;
  color: white;
  font-weight: bold;
  padding: 10px 25px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.tambah-btn:hover {
  background-color: #ff7fb6;
}
</style> -->
