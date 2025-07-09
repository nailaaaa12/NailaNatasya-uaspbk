<template>
  <div class="card">
    <img
      :src="`/images/${product.gambar}`"
      :alt="product.nama"
      class="cake-img"
    />
    <div class="card-info">
      <h2 class="card-title">{{ product.nama }}</h2>
      <p class="card-desc">{{ product.deskripsi }}</p>
      <p class="card-price"> Rp {{ product.harga.toLocaleString() }}</p>
      <button class="tambah-btn" @click="$emit('add-to-cart', product)">
        Tambah
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.card {
  font-family: 'Fredoka', sans-serif;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 480px;
  padding: 16px;
  background: #ffeaf4;
  border: 1px solid pink;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.2);
  transition: transform 0.15s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.cake-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
}

.card-info {
  flex: 1;
}

.card-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #d63384;
}

.card-desc {
  font-size: 14px;
  color: #555;
  margin: 4px 0;
}

.card-price {
  margin: 4px 0 10px;
  font-size: 14px;
  color: #444;
}

.tambah-btn {
  background: #f78fb3;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-family: 'Fredoka', sans-serif;
}

.tambah-btn:hover {
  background: #f368e0;
}
</style>
