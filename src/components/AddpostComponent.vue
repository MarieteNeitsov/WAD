<template>
    <div class="wrapper">
        <form class="formcard">
            <div class="label-and-input">
                <h1>Add Post</h1>
                <label for="body">Body: </label>
                <input name="body" type="text" id="body" required v-model="post.body" />
                <button @click="addPost" class="addPost">Add Post</button>
            </div>
        </form>
     </div>
</template>
<script>
const currentDate = new Date().toISOString();
// export default{
//     name: 'AddpostComponent',
// }
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        post_date: currentDate ,
        body: '',
        urllink: '',
      },
    };
  },
  methods: {
    addPost() {
      
      var data = {
        post_date: this.post.post_date,
        body: this.post.body,
        urllink: this.post.urllink,
      };
      
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        // redirect to /allposts view
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

