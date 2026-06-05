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
     nome: '', cpf: '', email: '', telefone: '', plano: ''
})

const enviando = ref(false)
const modalVisivel = ref(false)
const nomeSalvo = ref('')

const mascaraCPF = () => {
    let v = form.cpf.replace(/\D/g, '')
  if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4')
  else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3')
  else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/, '$1.$2')
  form.cpf = v
}
  

</script>