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
  
/*************  ✨ Codeium Command ⭐  *************/
        /**
         * Returns the initial data for the component.
         * 
         * @returns {Object} - The initial data for the component.
         * @property {Boolean} isOpen - Whether the message is open or not.
         */
/******  c34e8c6c-83da-403a-a2ea-30196adffa38  *******/
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