import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
import SignupView from '../views/SignupView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
  path: '/LoginView', 
  component: LoginView
  },
  {
    path: '/ContactView', 
    component: ContactView
  },
  {
    path: '/SignupView', 
    component: SignupView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
