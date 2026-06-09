<template>
    <div class="card" @click="$emit('selecionar', plano)">
    <div class="icone"><i :class="plano.icone"></i></div>
    <h3>{{ plano.nome }}</h3>
    <p class="preco">{{ plano.preco }}</p>
    <ul class="beneficios">
      <li v-for="b in plano.beneficios" :key="b">
        <i class="fas fa-check"></i> {{ b }}
      </li>
    </ul>
    <button class="btn-plano">Escolher plano</button>
  </div>
</template>

<script setup>
defineProps({ plano: Object })
defineEmits(['selecionar'])
</script>

<style scoped>
.card {
  background: #1a1a1a;
  border: 2px solid #39ff14;
  border-radius: 12px;
  padding: 25px;
  width: 280px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: white;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #39ff14;
}
.icone {
  font-size: 2.5rem;
  color: #39ff14;
}
h3 {
  font-size: 1.4rem;
  color: #39ff14;
}
.preco {
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
}
.beneficios {
  list-style: none;
  text-align: left;
  width: 100%;
}
.beneficios li {
  margin: 6px 0;
  font-size: 0.9rem;
  color: #ccc;
}
.beneficios .fa-check {
  color: #39ff14;
  margin-right: 6px;
}
.btn-plano {
  margin-top: 10px;
  padding: 0.6rem 1.4rem;
  background: #39ff14;
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Montserrat", sans-serif;
}
.btn-plano:hover {
  background: black;
  color: #39ff14;
  border: 1px solid #39ff14;
}
</style>