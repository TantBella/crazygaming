import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import vClickOutside from 'click-outside-vue3'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(vClickOutside).mount('#app')
