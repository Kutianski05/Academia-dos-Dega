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

const mascaraTelefone = () => {
    let v = form.telefone.replace(/\D/g, '')
  if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '$1 $2-$3')
  else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, '$1 $2')
  form.telefone = v
}

const validar = () => {
      let ok = true
  erros.nome     = form.nome.trim().length < 3 ? 'Informe seu nome completo.' : ''
  erros.cpf      = form.cpf.replace(/\D/g,'').length !== 11 ? 'CPF inválido.' : ''
  erros.email    = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Email inválido.' : ''
  erros.telefone = form.telefone.replace(/\D/g,'').length < 10 ? 'Telefone inválido.' : ''
  erros.plano    = form.plano === '' ? 'Selecione um plano.' : ''

  for (const e of Object.values(erros)) { if (e) { ok = false; break } }
  return ok
}

const enviarFormulario = async () => {
    if(! validar()) return
    enviando.value = true
    nomeSalvo.value = form.nome.split(' ')[0]

    await new Promise(r => setTimeout(r, 1200))

    enviando.value = false
    modalVisivel.value = true

    Object.assign(form, { nome: '', cpf: '', email: '', telefone: '', plano: ''})
}
</script>

<template>
    <div class="page">
        <NavBar titulo="Matrícula" />

        <main class="container">
            <section class="formulario">
                <h2>Faça a sua Matrícula na Academia dos DEGA</h2>

                <form @submit.prevent="enviarFormulario" novalidate>
                    <div class="campo">
                        <input
                        v-model="form.nome"
                        type="text"
                        placeholder="Nome completo"
                        :class="{erro: erros.nome}"
                        />

                        <span v-if="erros.nome" class="msg-erro">{{ erros.nome }}</span>
                    </div>

                    <div class="campo">
                        <input
                        v-model="form.cpf"
                        type="text"
                        placeholder="CPF (000.000.000-00)"
                        maxlength="14"
                        :class="{erro: erros.cpf}"
                        @input="mascaraCPF"
                        />
                        <span v-if="erros.cpf" class="msg-erro">{{ erros.cpf }}</span>
                    </div>

                    <div class="campo">
                        <input
                        v-model="form.email"
                        type="email"
                        placeholder="Email"
                        :class="{erro: erros.email}"
                        />

                        <spam v-if="erros.email" class="msg-erro">{{ erros.email }}</spam>
                    </div>

                    <div class="campo">
                        <input
                        v-model="form.telefone"
                        type="tel"
                        placeholder="Telefone 42(XXXXX-XXXX)"
                        maxlength="14"
                        :class="{erro: erros.telefone}"
                        @input="mascaraTelefone"
                        />
                        <span v-if="erros.telefone" class="msg-erro">{{ erros.telefone }}</span>
                    </div>

                    <div class="campo">
                             <select v-model="form.plano" class="{erro: erros.plano}">
                            <option value="">Escolha um Plano de Mensalidade</option>

                        <option v-for="p in opcoesPlanos" :key="p.valor" :value="p.valor">
                            {{ p.label }}
                        </option>
                        </select>
                        <span v-if="erros.plano" class="msg-erro">{{ erros.plano }}</span>
                    </div>

                    <button type="submit" :disabled="enviando">
                        <span v-if="enviando"><i class="fas fa-spinner fa-spin"></i> Enviando... </span>
                        <span v-else>Matricular</span>
                    </button>     
                </form>
            </section>

                <section class="infos">
                    <div class="icone-area"><i class="fas fa-dumbell icone-grande"></i></div>
                    <h2>Transforme seu corpo com a Academia dos DEGA</h2>
                    <p>Treine com os melhores equipamentos e personais trainers do ramo!!</p>

                    <ul class="lista-beneficios">
                         <li v-for="b in beneficios" key="b">
                            <i class="fas fa-check"></i> {{ b }}
                         </li>
                    </ul>
                </section>
        </main>

            <ModalConfirmacao
            v-if="modalVisivel"
            titulo="Matrícula realizada!!"
            :mensagem="'Bem vindo(a),' + 'nomeSalvo' + 'em breve entraremos em contato.'"
            @fechar="modalVisivel = false"
            />

            <FooterBar texto="Pagína feita por João Vitor Kutianski" />
    </div>
</template>

<style scoped>
    .page{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: #000;
    }

    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        padding: 2rem;
        flex: 1;
        max-width: 1100px;
        margin: 0 auto;
        width: 100%;
    }

    .formulario{
      background: #1a1a1a;
      border-radius: 1rem;
      padding: 2rem;
      color: #39ff14;
      animation: neonPulse 2.5s infinite;
    }

    .formulario h2{
        color: whitesmoke;
        margin-bottom: 1.5rem;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.3rem;
    }
    
    form{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
    .campo{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    input, select{
        padding: 0.7rem;
        border-radius: 0.5rem;
        border: 1px solid #39ff14;
        background: #111;
        color: whitesmoke;
        outline: none;
        font-size: 0.95rem;
        transition: 0.3s;
    }

    input:focus, select:focus{
        box-shadow: 0 0 10px #39ff14;
    }

    input.erro, select.erro{
        border-color: #ff4444;
    }
</style>