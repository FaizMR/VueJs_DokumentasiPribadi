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
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: () => import('../components/TheBreadcrumb.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../components/TheButton.vue'),
    },
    {
      path: '/buttonGroup',
      name: 'buttonGroup',
      component: () => import('../components/TheButtonGroup.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../components/TheCalendar.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/TheCard.vue'),
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('../components/TheCarousel.vue'),
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../components/TheChart.vue'),
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('../components/TheCheckbox.vue'),
    },
    {
      path: '/collapsible',
      name: 'collapsible',
      component: () => import('../components/TheCollapsible.vue'),
    },
    {
      path: '/combobox',
      name: 'combobox',
      component: () => import('../components/TheCombobox.vue'),
    },
    {
      path: '/command',
      name: 'command',
      component: () => import('../components/TheCommand.vue'),
    },
  ],
})

export default router
