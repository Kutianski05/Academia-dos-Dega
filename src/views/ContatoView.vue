<script setup>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/FooterBar.vue'

const enviarContato = () => {
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
}
</script>

<template>
    <div class="contato">
        <NavBar titulo="Academia dos Dega" />

        <section class="contato-container">
            <div class="card">
                <h2>Fale Conosco</h2>
                <p>Tire suas dúvidas ou agende uma visita experimental.</p>

                <form @submit.prevent="enviarContato">
                    <div class="input-group">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Seu nome" required />
                    </div>

                    <div class="input-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="seu@email.com" required />
                    </div>

                    <div class="input-group">
                        <label>Mensagem</label>
                        <textarea rows="5" placeholder="Como podemos ajudar?" required></textarea>
                    </div>

                    <button type="submit" class="btn-enviar">ENVIAR MENSAGEM</button>
                </form>
            </div>

            <div class="info-adicional">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Rua da Academia, 123 - Centro</p>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <p>(11) 99999-9999</p>
                </div>
            </div>
        </section>

        <FooterBar texto="Página feita por Fabinho" />
    </div>
</template>

<style scoped>
    .contato{
        background-color: #000;
        min-height: 100vh;
        color: #fff;
        padding-top: 80px;
        display: flex;
        flex-direction: column;
    }

    .contato-container{
        max-width: 800px;
        margin: 40px auto;
        padding: 0 20px;
        flex: 1;
        width: 100%;
    }

    .card{
        background-color: #1a1a1a;
        padding: 40px;
        border-radius: 20px;
        border-left: 5px solid #39ff14;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }

    h2{
        color: #39ff14;
        margin-bottom: 10px;
        font-family: "Roboto Condensed", sans-serif;
    }

    p{
        color: #ccc;
        margin-bottom: 30px;
        font-family: "Montserrat", sans-serif;
    }

    .input-group{
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    label{
        margin-bottom: 8px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        font-size: 0.9rem;
    }

    input, textarea{
        background-color: #000;
        border: 1px solid #333;
        padding: 12px;
        border-radius: 8px;
        color: #fff;
        outline: none;
        font-family: "Montserrat", sans-serif;
        transition: 0.3s;
    }
    
    input:focus, textarea:focus {
        border-color: #39ff14;
        box-shadow: 0 0 8px rgba(149, 255, 0, 0.3);
    }

    .btn-enviar {
        background-color: #39ff14;
        color: #000;
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        transition: transform 0.2s, background-color 0.2s;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        margin-top: 10px;
    }
    
    .btn-enviar:hover {
        transform: scale(1.01);
        background-color: #39ff14;
    }

    .info-adicional {
        display: flex;
        justify-content: space-around;
        margin-top: 40px;
        gap: 20px;
    }

    .info-item {
        text-align: center;
        color: #39ff14;
        font-size: 1.5rem;
        flex: 1;
        background: #1a1a1a;
        padding: 20px;
        border-radius: 15px;
    }

    .info-item p {
        color: #fff;
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 1rem;
    }

    @media (max-width: 576px) {
        .info-adicional {
            flex-direction: column;
        }
    }
</style>