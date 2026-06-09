<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'
import PlanoCard from '../components/PlanoCard.vue'
import ModalConfirmacao from '../components/ModalConfirmacao.vue'

const router = useRouter()

const planos = [
    {
        nome: 'Básico',
        preco: 'R$ 120,00/mês',
        icone: 'fas fa-star',
        beneficios: ['Acesso a Musculação', 'Horários Livres', 'Vestiários']
    },
    {
        nome: 'Intermediário',
        preco: 'R$ 300,00/mês',
        icone: 'fas fa-star-half-alt',
        beneficios: ['Personal Trainer', 'Musculação', 'Aulas em grupo', 'App de Treino']
    },
    {
        nome: 'Avançado',
        preco: 'R$ 600,00/mês',
        icone: 'fas fa-crown',
        beneficios: ['Acompanhamento completo', 'Nutricionista', 'Personal Exclusivo', 'Suplementos']
    }
]

const stats = [
    { valor: 500, label: 'Alunos Ativos' },
    { valor: 10, label: 'Personal Trainers' },
    { valor: 1, label: 'Anos de Mercado' },
    { valor: 200, label: 'Equipamentos' },
]

const termoBusca = ref('')
const planosFiltrados = computed(() =>
    planos.filter(p =>
        p.nome.toLowerCase().includes(termoBusca.value.toLowerCase())
    )
)

const modalVisivel = ref(false)
const planoSelecionado = ref('')

const selecionarPlano = (plano) => {
    planoSelecionado.value = plano.nome
    modalVisivel.value = true
}

const irParaMatricula = () => {
    modalVisivel.value = false
    
    const mapaPlanos = {
        'Básico': 'Basico',
        'Intermediário': 'Intermediario',
        'Avançado': 'Avancado'
    }
    
    const planoQuery = mapaPlanos[planoSelecionado.value] || ''

    router.push({ 
        path: '/matricula', 
        query: { plano: planoQuery } 
    })
}
</script>

<template>
    <div class="page">
        <NavBar titulo="Academia dos Dega" />

        <section class="hero">
            <div class="hero-content">
                <div class="hero-text">
                    <h2>Uma nova academia no mercado</h2>
                    <p>Treine com os melhores profissionais do ramo!!</p>
                    <router-link to="/matricula" class="btn-conheca">CONHEÇA NOSSOS PLANOS</router-link>
                </div>
                <div class="hero-icon">
                    <i class="fas fa-dumbbell hero-dumbbell"></i>
                </div>
            </div>
        </section>

        <section class="section-planos">
            <div class="titulo-secao">
                <h2>Nossos Planos</h2>
            </div>

            <div class="busca-container">
                <i class="fas fa-search busca-icone"></i>
                <input
                    v-model="termoBusca"
                    type="text"
                    placeholder="Buscar plano..."
                    class="busca-input"
                />
            </div>

            <p v-if="planosFiltrados.length === 0" class="sem-resultado">
                Nenhum plano encontrado para <strong>{{ termoBusca }}</strong>
            </p>

            <div class="cards">
                <PlanoCard
                    v-for="plano in planosFiltrados"
                    :key="plano.nome"
                    :plano="plano"
                    @selecionar="selecionarPlano"
                />
            </div>
        </section>

        <section class="stats">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
                <span class="stat-num">{{ stat.valor }}+</span>
                <span class="stat-label">{{ stat.label }}</span>
            </div>
        </section>

        <ModalConfirmacao
            v-if="modalVisivel"
            :titulo="'Plano ' + planoSelecionado"
            :mensagem="'Redirecionando para a matrícula no plano ' + planoSelecionado + '!'"
            @fechar="irParaMatricula"
        />

        <FooterBar texto="Página feita por João Vitor, Nelson, Fabinho" />
    </div>
</template>

<style scoped>
    .page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: #000;
        padding-top: 80px;
    }

    /*Hero*/
    .hero {
        background-color: #1a1a1a;
        color: white;
        padding: 4rem 2rem;
        margin: 2rem auto;
        max-width: 1100px;
        width: 90%;
        border-radius: 1.5rem;
        box-shadow: 0 0 1rem rgba(0,0,0,0.5);
    }

    .hero-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .hero-text {
        flex: 1;
    }

    .hero-text h2 {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
        font-family: "Roboto Condensed", sans-serif;
        margin-bottom: 1px;
    }

    .hero-text p {
        font-size: 1.1rem;
        color: #ccc;
        margin-bottom: 1.5rem;
        font-family: "Montserrat", sans-serif;
    }

    .hero-dumbbell {
        font-size: clamp(4rem, 10vw, 8rem);
        color: #39ff14;
        opacity: 0.8;
    }

    .btn-conheca {
        display: inline-block;
        text-decoration: none;
        background-color: #39ff14;
        color: black;
        font-size: 1rem;
        font-weight: bold;
        padding: 12px 4px;
        border-radius: 10px;
        transition: 0.3s;
        font-family: "Montserrat", sans-serif;
    }

    .btn-conheca:hover {
        background-color: #2a8f0f;
        transform: scale(1.05);
        box-shadow: 0 0 20px #39ff14;
    }

    /*Seçao Planos*/
    .section-planos {
        padding: 2rem;
        text-align: center;
        color: white;
    }

    .titulo-secao h2 {
        display: inline-block;
        border: 2px solid #39ff14;
        border-radius: 20px;
        padding: 0.4rem 1.2rem;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 1.5rem;
    }

    .busca-container {
        position: relative;
        max-width: 400px;
        margin: 0 auto 2rem auto;
        display: flex;
        align-items: center;
    }

    .busca-input {
        width: 100%;
        padding: 0.8rem 1rem 0.8rem 2.8rem; /* Espaço na esquerda para o ícone */
        border: 2px solid #39ff14;
        border-radius: 50px; /* Deixa as bordas bem arredondadas */
        background-color: #111;
        color: #fff;
        font-size: 1rem;
        font-family: "Montserrat", sans-serif;
        outline: none;
        transition: all 0.3s ease;
    }

    /* Efeito de Neon ao clicar no input de busca */
    .busca-input:focus {
        box-shadow: 0 0 15px #39ff14;
        background-color: #161616;
    }

    /* Ícone de Lupa posicionado dentro do input */
    .busca-icone {
        position: absolute;
        left: 1.2rem;
        color: #39ff14;
        font-size: 1.1rem;
        pointer-events: none; /* Garante que clicar no ícone também foque o input */
    }

    /* Placeholder customizado */
    .busca-input::placeholder {
        color: #666;
        opacity: 1;
    }

    .sem-resultado {
        margin-bottom: 2rem;
        color: #aaa;
    }

    .sem-resultado strong {
        color: #ff4444;
    }
    /* ========================================================================== */

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 1.5rem;
    }
</style>