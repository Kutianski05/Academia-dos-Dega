<template>
    <footer class="footer">
        <div class="footer-content">
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

