<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <h1>{{ titulo }}</h1>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Início</router-link></li>
        <li><router-link to="/ficha">Ficha de Treino</router-link></li>
        <li><router-link to="/matricula">Matrícula</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ul>
      <div class="nav-actions">
        <router-link to="/matricula" class="btn-red">Treinar Agora</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps(['titulo'])
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  border-bottom: 1px solid #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo h1 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #39ff14;
}

.btn-red {
  background-color: #ff0033;
  color: #fff;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: bold;
  transition: opacity 0.3s;
}

.btn-red:hover {
  opacity: 0.8;
}
</style>