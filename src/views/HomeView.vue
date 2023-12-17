
<template>
  <div>
      <HeaderComponent></HeaderComponent>
      <div class="container">
        <button v-if = "authResult" @click="Logout" class="center">Logout</button>
      </div>
      <div class="AllPosts">
        <div id="post-list">
          <h1>All Posts</h1>
            <ul>
              <div class="item" v-for="post in posts" :key="post.id">
                <router-link :to="'/api/apost/' + post.id">
                  
                  <span class="date"> <b></b> {{ post.post_date }} </span><br />
                  <span class="body"> <b></b> {{ post.body }} </span> <br />
                </router-link>
              </div>
            </ul>
          </div>
      </div>
      <button @click='this.$router.push("/AddPostView")'>Add Post </button>
      <button @click="deleteAllPosts">Delete all</button>
      <FooterComponent></FooterComponent>
   </div>
  </template>
  
  <script>
  import auth from "@/auth";
  import HeaderComponent from '@/components/HeaderComponent.vue'
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
      FooterComponent
    },
    

    methods:{
        Logout() {
        fetch("http://localhost:3000/auth/logout", {
            credentials: 'include',
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          this.$router.push("/LoginView");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
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
    deleteAllPosts() {
      this.posts.forEach(post => {
        fetch(`http://localhost:3000/api/posts/${post.id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => {
            if (response.ok) {
              console.log(`Post with ID ${post.id} deleted successfully`);
            } else {
              throw new Error(`Failed to delete post`);
            }
          })
          .catch(error => {
            console.error(error);
          });
      });
      console.log('Deletion complete');
      window.location.reload();
    },
    },
    mounted() {
    this.getPosts();
    console.log("mounted");
    
  },
  }

  </script>
<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.item {
  background: rgb(189, 212, 199);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
}
#post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
</style>