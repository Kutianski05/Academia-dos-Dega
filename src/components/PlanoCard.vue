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

</style>