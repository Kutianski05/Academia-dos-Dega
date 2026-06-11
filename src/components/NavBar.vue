<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <h1>{{ titulo }}</h1>
      </div>

      <button
        class="hamburger"
        :class="{ open: menuAberto }"
        @click="menuAberto = !menuAberto"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-menu" :class="{ active: menuAberto }">
        <ul class="nav-links">
          <li><router-link to="/" @click="fecharMenu">Início</router-link></li>
          <li><router-link to="/ficha" @click="fecharMenu">Ficha de Treino</router-link></li>
          <li><router-link to="/matricula" @click="fecharMenu">Matrícula</router-link></li>
          <li><router-link to="/contato" @click="fecharMenu">Contato</router-link></li>
        </ul>
        <div class="nav-actions">
          <router-link to="/matricula" class="btn-red" @click="fecharMenu">Treinar Agora</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['titulo'])

const menuAberto = ref(false)

const fecharMenu = () => {
  menuAberto.value = false
}
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


.nav-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
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
  white-space: nowrap;
}

.btn-red:hover {
  opacity: 0.8;
}


.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}


@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 300px;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.97);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: right 0.35s ease;
    border-left: 1px solid #222;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  .nav-links a {
    font-size: 1.2rem;
  }

  .btn-red {
    padding: 12px 35px;
    font-size: 1rem;
  }
}
</style>