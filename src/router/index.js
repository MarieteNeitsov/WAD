import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
import SignupView from '../views/SignupView.vue'
import AddPostView from '../views/AddPostView.vue';
import APost from "../views/APost.vue";
import auth from "../auth";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
        if (!authResult) {
          next('/LoginView')
        } else {
          next();
          }
    }
  },
  { 
  path: '/LoginView', 
  component: LoginView,
  
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
    component: AddPostView,
    // beforeEnter: async(to, from, next) => {
    //   let authResult = await auth.authenticated();
    //     if (!authResult) {
    //       next('/LoginView')
    //     } else {
    //       next();
    //       }
    // }
  },
  {
    path: "/api/apost/:id",
    name: "APost",
    component: APost,
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
