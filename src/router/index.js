import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
  path: '/SignupView', 
  component: SignupView
  },
  {
    path: '/ContactView', 
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
