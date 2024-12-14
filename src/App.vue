<template>
<h1>Привет</h1>
     <message-one 
    message="Сообщение из компонента message-one" :isOpen="isOpen"
    @close="close">
    </message-one>
    <message-two></message-two>
</template>

<script>
import MessageOne from './components/MessageOne.vue'
import MessageTwo from './components/MessageTwo.vue'
export default {


   components: {
        MessageOne,
        MessageTwo
    },
} 
</script>

<style>

</style>