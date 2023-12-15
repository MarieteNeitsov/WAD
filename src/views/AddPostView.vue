<template>
    <HeaderComponent></HeaderComponent>
    <AddpostComponent></AddpostComponent> 
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import AddpostComponent from '@/components/AddpostComponent.vue';
  
  export default {
    name: 'AddPostView',
    components: {
      HeaderComponent,
      AddpostComponent,
      FooterComponent
    },
  };
  </script>