<template>
   <div>
         <message-one 
        message="Сообщение из компонента message-TWO" :isOpen="isOpen"
        @close="close">
        </message-one>
</div>
    </template>
    
    <script>
    import MessageOne from './MessageOne.vue'
   
    export default {
  
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            close() {
                this.isOpen = !this.isOpen
            }
        },
       components: {
            MessageOne,
          
        },
    } 
    </script>
    
    <style>
    
    </style>