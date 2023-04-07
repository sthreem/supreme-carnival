import '@/assets/styles/main.scss'

import App from '@/App.vue'
import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'

createApp(App).use(store).use(router).mount('#app')
