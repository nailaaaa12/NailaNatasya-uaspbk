<template>
  <div class="keranjang-container">
    <h2>Keranjang Belanja</h2>

    <div v-if="cart.items.length === 0" class="kosong">
      Keranjang masih kosong.
    </div>

    <ul class="daftar-item">
      <li v-for="item in cart.items" :key="item.id" class="item">
        <img
          :src="`/images/${item.gambar || item.image}`"
          alt="Gambar Kue"
          class="item-img"
        />

        <div class="item-info">
          <strong>{{ item.nama }}</strong>
          <span> Rp {{ item.harga.toLocaleString() }} </span>
        </div>

        <button class="btn-hapus" @click="cart.removeFromCart(item.id)">
          Hapus
        </button>
      </li>
    </ul>

    <p v-if="cart.items.length > 0" class="total">
      Total: <strong>{{ total.toLocaleString() }} IDR</strong>
    </p>

    <button
      v-if="cart.items.length > 0"
      class="btn-checkout"
      @click="checkout"
    >
      Checkout
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/cart'

const cart = useCartStore()

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.harga, 0)
)

function checkout() {
  alert('Terima kasih sudah membeli di SweetPaws!')
  cart.clearCart()
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

.keranjang-container {
  font-family: 'Fredoka', sans-serif;
  max-width: 600px;
  margin: 40px auto;
  background: linear-gradient(135deg, #ffeaf4, #fceaff);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(255, 182, 193, 0.25);
  color: #444;
  text-align: center;
}

h2 {
  color: #d14b8f;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.kosong {
  color: #888;
  font-size: 16px;
}

.daftar-item {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff0f6;
  margin-bottom: 12px;
  padding: 10px 16px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(255, 192, 203, 0.15);
}

.item-img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.item-info {
  flex: 1;
  text-align: left;
}

.btn-hapus {
  background-color: #ff8bb3;
  border: none;
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-hapus:hover {
  background-color: #ff639e;
}

.total {
  font-size: 18px;
  text-align: right;
  margin-top: 10px;
  color: #ff5f8f;
}

.btn-checkout {
  display: block;
  margin: 20px auto 0;
  background-color: #ffaad4;
  color: white;
  font-weight: bold;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-checkout:hover {
  background-color: #ff7fb6;
}
</style>
