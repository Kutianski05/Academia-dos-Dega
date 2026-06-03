import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ADICIONA ESTA LINHA EXATAMENTE AQUI:
import '@fortawesome/fontawesome-free/css/all.min.css'

// Se o teu projeto tiver um ficheiro de estilo global personalizado, ele costuma vir abaixo:
import './assets/main.css' 

const app = createApp(App)

app.use(router)
app.mount('#app')