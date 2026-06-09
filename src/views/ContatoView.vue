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
                <p>Tire suas duvidas ou agende uma visita expermental.</p>

                <form @submit.prevent= "enviarContato">
                    <div class="input-grupo">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Seu nome" required />
                    </div>

                    <div class="input-grupo">
                        <label>E-mail</label>
                        <input type="text" placeholder="seu@email.com" required />
                    </div>

                    <div class="input-grupo">
                        <label>Mensagem</label>
                        <textarea rows="5" placeholder="Como podemos ajudar?"></textarea>
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

        <FooterBar texto="Página feita por João Vitor, Nelson, Fabinho e Luis Antônio" />

    </div>
</template>

<style scoped>
    .contato{
        background-color: #000;
        min-height: 100vh;
        color: #fff;
    }

    .contato-container{
        max-width: 800px;
        margin: 60px auto;
        padding: 0 20px;
    }

    .card{
        background-color: #1a1a1a;
        padding: 40px;
        border-radius: 20px;
        border-left: 5px solid #95ff00;
    }

    h2{
        color: #95ff00;
        margin-bottom: 10px;
    }

    p{
        color: #ccc;
        margin-bottom: 30px;
    }

    .input-group{
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    label{
        margin-bottom: 8px;
        font-weight: bold;
    }

    input, textarea{
        background-color: #000;
        border: 1px solid #333;
        padding: 12px;
        border-radius: 8px;
        color: #fff;
        outline: none;
    }
    input:focus, textarea:focus {
        border-color: #95ff00;
    }

    .btn-enviar {
        background-color: #95ff00;
        color: #000;
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        transition: transform 0.2s;
    }
    .btn-enviar:hover {
        transform: scale(1.02);
    }

    .info-item {
        text-align: center;
        color: #95ff00;
    }

    .info-item p {
        color: #fff;
        margin-top: 10px;
    }

</style>