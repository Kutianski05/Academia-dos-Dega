<template>
    <footer class="footer-bar-flutuante">
        <div class="footer-dois">
            <p>{{ texto }}</p>
            <div class="rede-social">
                <a href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineProps(['texto'])
</script>

<style scoped>
    .footer-bar-flutuante{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(10px);
        border-top: 2px solid #95ff00;
        padding: 15px 0;
        z-index: 9999;
        box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.5);
    }

    .footer-dois{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    .footer-dois p {
        color: #ccc;
        margin: 0;
        font-size: 14px;
    }

    .rede-social{
        display: flex;
        gap: 20px;
    }

    .rede-social a {
        color: #95ff00;
        font-size: 1.3rem;
        transition: transform 0.2s, color 0.2s;
        text-decoration: none;
    }

    .rede-social a:hover{
        transform: scale(1.2);
        color: #ffffff;
    }

    @media (max-width: 600px) {
        .footer-bar-flutuante{
            flex-direction: column;
            gap: 10px;
            text-align: center;
        }
    }

</style>