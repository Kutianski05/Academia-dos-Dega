<script setup>
defineProps({
titulo: {type: String, default: "Sucesso!!"},
mensagem: {type: String, default: "Operação realizada com sucesso!!"}
})

defineEmits(['fechar'])
</script>

<template>
    <div class="overlay" @click.self="$emit('fechar')">
        <div class="modal">
            <button class="fechar" @click="$emit('fechar')">
                <i class="fas fa-times"></i>
            </button>

            <div class="icone-sucesso">
            <i class="fas fa-check-circle"></i>
            </div>
            
            <h2>{{ titulo }}</h2>
            <p>{{ mensagem }}</p>

            <button class="btn-ok" @click="$emit('fechar')">OK</button>
        </div>
    </div> 
</template>

<style scoped>
.overlay{
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
</style>