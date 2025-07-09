<template>
  <div class="home">
    <div class="content">
      <h1>🎀 Selamat datang di <span class="brand">SweetPaws!</span></h1>
      <p class="tagline">Toko kue lucu untuk jiwa imut 🍓🧁</p>
      <p class="desc">
        Temukan berbagai macam kue handmade yang tidak hanya enak, tapi juga menggemaskan!  
        Cocok untuk hadiah, pesta, atau sekadar memanjakan diri sendiri 🍰💖
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500&display=swap');

.home {
  font-family: 'Fredoka', sans-serif;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(to bottom right, #fff0f5, #ffe4f1);
  min-height: calc(100vh - 80px); /* offset navbar & footer */
}

.content {
  max-width: 700px;
}

h1 {
  font-size: 36px;
  color: #d81b60;
  margin-bottom: 10px;
}

.brand {
  color: #ec407a;
}

.tagline {
  font-size: 20px;
  margin-bottom: 20px;
  color: #555;
}

.desc {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}
</style>
