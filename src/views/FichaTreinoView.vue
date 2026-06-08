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

    <section class="container-tabelas">
        
    </section>

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

const treinos = reactive([
  {
    nome: 'PUSH',
    exercicios: [
      { nome: 'Supino Reto',        series: '3 séries (10-12)', feito: false },
      { nome: 'Voador',             series: '3 séries (10-12)', feito: false },
      { nome: 'Desenvolvimento',    series: '3 séries (10-12)', feito: false },
      { nome: 'Elevação Lateral',   series: '3 séries (10-12)', feito: false },
      { nome: 'Tríceps Francês',    series: '3 séries (10-12)', feito: false },
      { nome: 'Tríceps Testa',      series: '3 séries (10-12)', feito: false },
    ]
  },
  {
    nome: 'PULL',
    exercicios: [
      { nome: 'Remada Curvada',  series: '3 séries (10-12)', feito: false },
      { nome: 'Puxada Alta',     series: '3 séries (10-12)', feito: false },
      { nome: 'Puxada Baixa',    series: '3 séries (10-12)', feito: false },
      { nome: 'Voador Inverso',  series: '3 séries (10-12)', feito: false },
      { nome: 'Pulldown',        series: '3 séries (10-12)', feito: false },
      { nome: 'Rosca Direta',    series: '3 séries (10-12)', feito: false },
      { nome: 'Rosca Martelo',   series: '3 séries (10-12)', feito: false },
    ]
  },
  {
    nome: 'LEGS',
    exercicios: [
      { nome: 'Agachamento',       series: '3 séries (10-12)', feito: false },
      { nome: 'Stiff',             series: '3 séries (10-12)', feito: false },
      { nome: 'Cadeira Flexora',   series: '3 séries (10-12)', feito: false },
      { nome: 'Leg Press',         series: '3 séries (10-12)', feito: false },
      { nome: 'Cadeira Extensora', series: '3 séries (10-12)', feito: false },
      { nome: 'Passada',           series: '3 séries (10-12)', feito: false },
    ]
  }
])

</script>

<style scoped>
</style>