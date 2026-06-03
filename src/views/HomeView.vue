<script setup>
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'
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
    {valor: 500, label: 'Alunos Ativos'},
    {valor: 10, label: 'Personal Trainers'},
    {valor: 1, label: 'Anos de Mercado'},
    {valor: 200, label: 'Equipamentos'},
]

const termoBusca = ref('')
const planosFiltrados = computed(() =>
planos.filter(p =>
    p.nome.toLowerCase().includes(termo.Busca.value.toLowerCase())
)
)
</script>