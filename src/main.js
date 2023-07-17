import { createApp } from 'vue'
import App from '@/app/App.vue'
import store from '@/app/store'
import router from './app/router/router'

const app = createApp(App)

app.use(store).use(router).mount('#app')
