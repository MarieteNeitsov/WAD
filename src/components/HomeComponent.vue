<template>
    <div v-if ='post' class ='postcontainer'>
        <div class="post-header">
            <p class ='time'>{{ post.create_time }}</p>

        </div>
        <div class = 'post-content'>
            <p class="text">{{ post.text }}</p>
        </div>
        <div class="post-footer">
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

}
</script>