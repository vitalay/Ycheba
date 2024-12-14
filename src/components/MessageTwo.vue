<template>
   <div>
         <message-one 
        message="Сообщение из компонента message-тwo" :isOpen="isOpen"
        @close="close">
        </message-one>
</div>

    </template>
    
    <script>
    import MessageOne from './MessageOne.vue'
    import messageMixin from '../messegeMixin.js'
   
    export default {
      
      mixins: [messageMixin],
  
      
       components: {
            MessageOne,
          
        },
    } 
    </script>
    
    <style>
    
    </style>