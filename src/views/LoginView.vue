<template>
    <HeaderComponent></HeaderComponent>
    <LoginComponent></LoginComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
  
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import LoginComponent from '@/components/LoginComponent.vue';
  export default {
    name: 'LoginView',
    components: {
      HeaderComponent,
      FooterComponent,
      LoginComponent
    }
  }
  </script>