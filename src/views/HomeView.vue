
<template>
  <div>
      <HeaderComponent></HeaderComponent>
      <HomeComponent v-for="post in posts" :key="post.id" :post="post" />
      <button @click="resetLikes">reset likes</button>
      <FooterComponent></FooterComponent>
   </div>
  </template>
  
  <script>

  import HeaderComponent from '@/components/HeaderComponent.vue'
  import HomeComponent from '@/components/HomeComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import { mapState } from 'vuex';
  
  export default {
    name: 'HomeView',
    components: {
      HeaderComponent,
      HomeComponent,
      FooterComponent
    },
    computed:{
      ...mapState(['posts'])
    },
    created(){
      this.$store.dispatch('fetchPosts')
    },
    methods:{
      ResetLike: function(){
        this.$store.commit("resetLikes")
      }
    }
  }

  </script>