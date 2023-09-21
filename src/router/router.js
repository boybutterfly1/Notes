import { createRouter, createWebHistory } from 'vue-router'
import NoteDetails from '@/pages/NoteDetails.vue'
import Main from '@/pages/Main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/note/:id',
    name: 'note',
    component: NoteDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
