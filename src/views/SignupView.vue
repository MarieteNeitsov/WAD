<template>
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
  
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue';
  export default {
    name: 'SignupView',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
  </script>