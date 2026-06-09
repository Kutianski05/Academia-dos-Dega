👥 Integrantes
João Vitor Kutianski
Nelson
Fabinho
🚀 Como executar
Pré-requisitos
Node.js (v18 ou superior)
npm
Instalação
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/academia-dega.git
cd academia-dega

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run dev
Acesse: http://localhost:5173

Build para produção
npm run build
📁 Estrutura do projeto
src/
├── components/
│   ├── NavBar.vue           # Barra de navegação reutilizável
│   ├── FooterBar.vue        # Rodapé reutilizável
│   ├── PlanoCard.vue        # Card de plano (usado na Home)
│   └── ModalConfirmacao.vue # Modal genérico de confirmação
├── views/
│   ├── HomeView.vue         # Página inicial
│   ├── FichaTreinoView.vue  # Ficha de treino interativa
│   ├── MatriculaView.vue    # Formulário de matrícula
│   └── ContatoView.vue      # Página de contato
├── router/
│   └── index.js             # Configuração do Vue Router
├── App.vue
├── main.js
└── style.css
🛠 Tecnologias
Vue.js 3 (Composition API)
Vue Router 4
Vite
HTML + CSS + JavaScript
