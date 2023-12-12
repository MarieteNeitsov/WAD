
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

  
  export default {
    name: 'HomeView',
    data() {
    return {
      posts: [],
    };
    },
    components: {
      HeaderComponent,
      HomeComponent,
      FooterComponent
    },
    /*computed:{
      ...mapState(['posts'])
    },
    created(){
      this.$store.dispatch('fetchPosts')
    },*/
    methods:{
      resetLikes: function(){
        this.$store.commit("resetLikes")
      },
      
      getPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => 
              response.json())
        .then((data) => 
              (this.posts = data))
        .catch((err) => 
              console.log(err.message));
    },
    },
    mounted() {
    this.getPosts();
    console.log("mounted");
  },
  }

  </script>