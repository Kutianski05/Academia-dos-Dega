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