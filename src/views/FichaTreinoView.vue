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

    <div class="filtro-area">
      <p class="filtro-label">Filtrar treino:</p>
      <div class="filtro-botoes">
        <button
          v-for="cat in categorias"
          :key="cat"
          :class="['btn-filtro', { ativo: filtroAtivo === cat }]"
          @click="filtroAtivo = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <section class="container-tabelas">
        <div
        v-for="treino in treinos"
        :key="treino.nome"
        v-show="filtroAtivo === 'Todos' || filtroAtivo === treino.nome"
        class="caixa"
      >
        <h3>{{ treino.nome }}</h3>
        <table>
          <tbody>
            <tr v-for="ex in treino.exercicios" :key="ex.nome">
              <td>{{ ex.nome }}</td>
              <td>{{ ex.series }}</td>
              <td>
                <button
                  class="btn-check"
                  :class="{ concluido: ex.feito }"
                  @click="ex.feito = !ex.feito"
                  :title="ex.feito ? 'Desmarcar' : 'Marcar como feito'"
                >
                  <i :class="ex.feito ? 'fas fa-check-circle' : 'far fa-circle'"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="progresso">
          <div class="barra" :style="{ width: progressoTreino(treino) + '%' }"></div>
        </div>
        <span class="pct">{{ progressoTreino(treino) }}% concluído</span>
      </div>
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

const categorias = ['Todos', 'PUSH', 'PULL', 'LEGS']
const filtroAtivo = ref('Todos')

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
const progressoTreino = (treino) => {
  const total = treino.exercicios.length
  const feitos = treino.exercicios.filter(e => e.feito).length
  return Math.round((feitos / total) * 100)
}

</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #000;
}
.dados {
  background-color: #111;
  border: 1px solid #39ff14;
  color: white;
  max-width: 600px;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow: 0 0 1rem rgba(0,0,0,0.5);
  font-family: "Noto Sans", sans-serif;
}

.avatar { font-size: 4rem; color: #39ff14; margin-bottom: 0.5rem; }
.dados h2 { font-size: 1.4rem; margin-bottom: 1rem; }
.dados p { font-size: 1rem; margin: 4px 0; color: #ccc; }
.dados strong { color: #39ff14; }
</style>