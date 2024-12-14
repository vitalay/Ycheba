<template>
  <div class="container-fluid">
    <h1>Привет</h1>
    <message-one 
      message="Сообщение из компонента message-one" 
      :isOpen="isOpen" 
      @close="close">
    </message-one>
    <message-two></message-two>

    <h2>Teleport</h2>
    <div class="app-vue">
      <teleport to="body">
        <the-teleport @closeModal="isModal = false" v-if="isModal"></the-teleport>
      </teleport>
    </div>

    <button class="btn btn-primary" @click="isModal = !isModal">
      {{ isModal ? 'Закрыть' : 'Показать' }} модальное окно
    </button>
  </div>
</template>

<script>
import MessageOne from './components/MessageOne.vue';
import MessageTwo from './components/MessageTwo.vue';
import messageMixin from './messegeMixin.js';
import TheTeleport from './components/TheTeleport.vue';

export default {
  mixins: [messageMixin],
  components: {
    MessageOne,
    MessageTwo,
    TheTeleport,
  },
  data() {
    return {
      isModal: false,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 20px;
}

.btn {
  margin-top: 20px;
}
</style>
