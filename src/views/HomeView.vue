
<template>
  <div>
      <HeaderComponent></HeaderComponent>
      <div class="container">
        <button v-if = "authResult" @click="Logout" class="center">Logout</button>
      </div>
      <HomeComponent v-for="post in posts" :key="post.id" :post="post"></HomeComponent>
      <button @click='this.$router.push("/AddPostView")'>Add Post </button>
      <button @click="resetLikes">Delete all</button>
      <FooterComponent></FooterComponent>
   </div>
  </template>
  
  <script>
  import auth from "@/auth";
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import HomeComponent from '@/components/HomeComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'

  
  export default {
    name: 'HomeView',
    data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
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
        Logout() {
        fetch("http://localhost:3000/auth/logout", {
            credentials: 'include',  //  Don't forget to specify this if you need cookies
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push("/LoginView");
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
      },
      // fetchPosts() {
      //   // You should remember how Fetch API works
      //   // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      //   fetch(`http://localhost:3000/api/posts/`)
      //     .then((response) => response.json())
      //     .then((data) => (this.posts = data))
      //     .catch((err) => console.log(err.message));
      // },
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
    //this.fetchPosts();
    this.getPosts();
    console.log("mounted");
    
  },
  }

  </script>
