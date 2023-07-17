import { createRouter, createWebHashHistory } from 'vue-router';
import MessagePage from '@/pages/MessagePage'

const routes = [
    {
      path: '/',
      component: MessagePage
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router