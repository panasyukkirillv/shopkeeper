import { createRouter, createWebHashHistory } from 'vue-router'
import Profile from '@/views/Profile.vue'
import Orders from '@/views/Orders.vue'
import Products from '@/views/Products.vue'
import Messages from '@/views/Messages.vue'
import Settings from '@/views/Settings.vue'

const routes = [
  {
    path: '/',
    redirect: '/profile'
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Профиль'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: {
      title: 'Заказы'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: 'Продукты'
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
    meta: {
      title: 'Сообщения'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      title: 'Настройки'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
