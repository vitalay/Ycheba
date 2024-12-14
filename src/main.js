

import { createApp } from 'vue'
import App from './App.vue'

const messageMixin = {
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
}
const app = createApp(App)
app.mixin(messageMixin)
.mount('#app')
