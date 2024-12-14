<template>
   <div>
         <message-one 
        message="Сообщение из компонента message-Two" :isOpen="isOpen"
        @close="close">
        </message-one>
</div>
    </template>
    
    <script>
    import MessageOne from './MessageOne.vue'
   
    export default {
  
      
       components: {
            MessageOne,
          
        },
    } 
    </script>
    
    <style>
    
    </style>