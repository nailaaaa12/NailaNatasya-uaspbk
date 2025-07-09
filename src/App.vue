<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&family=Quicksand:wght@400;600&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Fredoka', 'Quicksand', sans-serif;
  background-color: #fff0f5;
  color: #444;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: 1;
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

h1, h2, h3 {
  color: #ec407a;
  margin-bottom: 12px;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

button {
  font-family: 'Fredoka', sans-serif;
  padding: 10px 20px;
  background-color: #f48fb1;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #ec407a;
}

a {
  color: #d81b60;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #ad1457;
}
</style>
