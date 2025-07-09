import { defineStore } from 'pinia'
const API_URL = 'https://c2f11ffc-3860-4d52-8545-1615da252451-00-qwyg3qd01o5c.sisko.replit.dev/'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      this.items.push(product)
    },
    removeFromCart(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
