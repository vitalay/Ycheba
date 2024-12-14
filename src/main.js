

import { createApp } from 'vue'
import App from './App.vue'
import messageMixin from './messegeMixin.js'

const app = createApp(App)
app.mixin(messageMixin)
.mount('#app')
