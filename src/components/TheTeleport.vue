<template>
    <div class="modal-overlay">
      <div class="modal">
        <h2>Модальное окно</h2>
        <p>Это текст внутри модального окна</p>
        <button class="btn btn-danger" @click="$emit('closeModal')">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheTeleport",
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  
  .btn {
    margin-top: 15px;
  }
  </style>
  