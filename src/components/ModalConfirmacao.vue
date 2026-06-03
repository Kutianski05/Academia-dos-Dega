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

.modal{
    background: #1a1a1a;
    border: 2px solid #39ff14;
    border-radius: 1rem;
    padding: 2.5rem;
    text-align: center;
    color: white;
    max-width: 400px;
    width: 90%;
    position: relative;
    animation: aparecer 0.3s ease;
}

@keyframes aparecer{
 from {transform: scale(0.8); opacity: 0;}
 to {transform: scale(1); opacity:1;}
}

.fechar{
    position: absolute;
    top: 12px;
    right: 14px;
    background: none;
    border: none;
    color: #aaa;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>