<template>
<div class="alert alert-primary">
    <h1 v-if="isOpen">{{ message }}</h1>
    <button class="btn btn-primary" @click="$emit('close')">
        <span>{{ isOpen ? 'Скрыть сообщение' : 'Показать сообщение' }}</span>
    </button>
</div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        
        isOpen: Boolean,
        message: String
    }
    
}




</script>

<style>

</style>