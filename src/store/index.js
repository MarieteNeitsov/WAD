import { createStore } from 'vuex';

export default createStore({
    state: {
        posts: []
    }, 
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        }, 
        incrementLikes(state, postId) {
            const post = state.posts.find((p) => p.id === postId);
            if (post) {
              post.likes += 1;
            }
          },
        resetLikes(state) {
            state.posts.forEach((post) => {
              post.likes = 0;
            });
        },
    },
        actions:{
            async fetchPosts({ commit }) {
                try {
                    let response = await fetch("https://raw.githubusercontent.com/MarieteNeitsov/WAD/main/posts.json");
                    
                    let data = await response.json();
                    console.log(data)
                    commit('setPosts', data.reverse());
                
                }catch(error){
                    console.error('error', error);
                }
            },

        },
        getters:{
            getPosts: (state) => (id) =>{
                return state.posts.find(post => post.id === id)
            }
        }
});