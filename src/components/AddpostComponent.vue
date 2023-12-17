<template>
    <div class="wrapper">
        <div class="card">
            <div class="label-and-input">
                <h1>Add Post</h1>
                <label for="body">Body: </label>
                <input name="body" type="text" id="body" required v-model="post.body" />
                <button @click="addPost" class="addPost">Add Post</button>
            </div>
        </div>
     </div>
</template>
<script>

// export default{
//     name: 'AddpostComponent',
// }
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        post_date: Date ,
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      //const currentDate = new Date().toISOString();
      var data = {
        post_date: this.post.post_date,
        body: this.post.body,
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
        this.$router.push("/");
        console.log(response.data);
        // redirect to /allposts view
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

