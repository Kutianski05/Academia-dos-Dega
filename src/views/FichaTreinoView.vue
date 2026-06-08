<template>
<div class="page">
    <NavBar titulo="Ficha de Treino" />

    <div class="dados">
      <div class="aluno">
        <div class="avatar"><i class="fas fa-user-circle"></i></div>
        <h2>Aluno: {{ aluno.nome }}</h2>
      </div>
      <br />
      <p v-for="dado in dadosAluno" :key="dado.label">
        <strong>{{ dado.label }}:</strong> {{ dado.valor }}
      </p>
    </div>

    <FooterBar texto="Página criada por Nelson" />
</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'

const aluno = { nome: 'Dionatan Inhoato Markiu' }
const dadosAluno = [
  { label: 'Altura',   valor: '1,90 m' },
  { label: 'Peso',     valor: '120 kg (seco)' },
  { label: 'Objetivo', valor: 'Hipertrofia' },
  { label: 'Tipo',     valor: 'CrossFit' },
]
</script>

<style scoped>
</style>