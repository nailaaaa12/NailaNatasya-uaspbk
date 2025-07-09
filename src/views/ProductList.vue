<template>
  <div>
    <h2>Semua Kue Imup🎀</h2>

    <div class="grid">
      <ProductCard
        v-for="kue in products"
        :key="kue.id"
        :product="kue"
        @add-to-cart="tambahKeKeranjang"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useCartStore } from '@/store/cart'

const products = ref([])
const cart = useCartStore()

onMounted(async () => {
  const res = await fetch('https://c2f11ffc-3860-4d52-8545-1615da252451-00-qwyg3qd01o5c.sisko.replit.dev/')
  products.value = await res.json()
})

function tambahKeKeranjang(kue) {
  cart.addToCart(kue)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap');

:host {
  font-family: 'Fredoka', sans-serif;
}

h2 {
  font-family: 'Fredoka', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #f24b8e;
  text-align: center;
  margin: 40px 0 20px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  padding: 0 20px;
}
</style>
