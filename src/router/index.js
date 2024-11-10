import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Contract',
    name: 'Contract',

    component: () => import('../views/Contract.vue')
  },
  {
    path: '/Product',
    name: 'Product',
  
    component: () => import('../views/Product.vue')
  },
  {
    path: '/Login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
  
    component: () => import('../views/Register.vue')
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
  
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/Grade',
    name: 'Grade',
  
    component: () => import('../views/Grade.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

