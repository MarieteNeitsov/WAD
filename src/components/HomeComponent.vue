<template>
    <div v-if ='post' class ='postcontainer'>
        <div class="post-header">
            <img src="https://github.com/MarieteNeitsov/WAD/blob/main/icon.png?raw=true" alt="profile">
            <h4 class = 'author'>{{ post.author }}</h4>
            <p class ='time'>{{ post.create_time }}</p>

        </div>
        <div class = 'post-content'>
            <img v-if = 'post.image' :src="post.image" alt="post image">
            <p class="text">{{ post.text }}</p>
        
        </div>
        <div class="post-footer">
            <button class="like" @click="
            IncreaseLike(post)">Like</button>
            <p class="likes">{{ post.likes }}</p>
        </div>
    </div>
    <div v-else>Posts not found</div>
</template>
<script>
export default{
    name: 'HomeComponent',
    props: {
        post: Object
    },
    computed:{
        userPicture(){
            return this.post.profilepic || this.defaultImage;
        },
        defaultImage(){
            return './icon.png';
        }
    },
    methods:{
        IncreaseLike(post){
            post.likes = post.likes +1
        }
    }

}
</script>