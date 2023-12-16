import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
import SignupView from '../views/SignupView.vue'
import AddPostView from '../views/AddPostView.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: 'LoginView'
  },
  {
    path: '/Homeview',
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
  {
    path: '/AddPostView',
    component: AddPostView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
