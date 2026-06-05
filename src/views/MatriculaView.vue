<script setup>
import { ref, reactive } from 'vue'
import FooterBar from '../components/FooterBar.vue'
import NavBar from '../components/NavBar.vue'
import ModalConfirmacao from '@/components/ModalConfirmacao.vue'


const opcoesPlanos = [
    { valor: 'Basico', label: 'Básico -- 120,00 R$/ mês' },
    { valor: 'Intermediario', label: 'Intermediário -- 300,00 R$/ mês' },
    { valor: 'Avancado', label: 'Avançado -- 600,00 R$/ mês' },
]

const beneficios = [
    'Equipamentos de última geração',
    'Personal trainer certificados',
    'Aulas coletivas incluídas',
    'Estacionamento gratuito',
    'App de acompanhamento',
]

const form = reactive({
    nome: '', cpf: '', email: '', telefone: '', plano: ''
})

const erros = reactive({
    
})
  

</script>