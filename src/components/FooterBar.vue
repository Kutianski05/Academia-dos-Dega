<template>
    <footer class="footer">
        <div class="footer-dois">
            <p>{{ texto }}</p>
            <div class="rede-social">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-whatsapp"></i>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineProps(['texto'])
</script>

<style scoped>
    .footer{
        background-color: #000;
        padding: 40px 0;
        border-top: 2px solid #95ff00;
        margin-top: 50px;
    }

    .footer-dois{
        text-align: center;
        color: #888;
    }

    .rede-social{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
        font-size: 1.5rem;
        color: #95ff00;
    }
</style>