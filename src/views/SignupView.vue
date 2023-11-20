<template>
    <HeaderComponent></HeaderComponent>
    <SignupComponent></SignupComponent>
    <FooterComponent></FooterComponent>
</template>

<script>
  
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import SignupComponent from '@/components/SignupComponent.vue';
  export default {
    name: 'SignupView',
    components: {
      HeaderComponent,
      FooterComponent,
      SignupComponent
    }
  }
  </script>