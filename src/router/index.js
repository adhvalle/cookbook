import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/HomeView.vue'),
      props: { showFavourites: true }
    }
  ]
})

export default router
