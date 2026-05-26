import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/components',
      name: 'components',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentsView.vue'),
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../components/TheAccordion.vue'),
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('../components/TheAlert.vue'),
    },
    {
      path: '/alertDialog',
      name: 'alertDialog',
      component: () => import('../components/TheAlertDialog.vue'),
    },
    {
      path: '/aspectRatio',
      name: 'aspectRatio',
      component: () => import('../components/TheAspectRatio.vue'),
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: () => import('../components/TheAvatar.vue'),
    },
        {
      path: '/badge',
      name: 'badge',
      component: () => import('../components/TheBadge.vue'),
    },
  ],
})

export default router
