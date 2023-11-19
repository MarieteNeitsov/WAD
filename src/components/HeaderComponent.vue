<template>
    <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Sign Up</router-link> 
    </header>
</template>

<style scoped>
    header{
    width: 100%;
    height: 50px;
    background-image: linear-gradient(to right, #ABD6F8, #86B2D3);
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    }
    a {
    color: black; 
    text-decoration: none; 
    }
    a:hover {
     color: rgb(108, 108, 108);
    }
    
</style>