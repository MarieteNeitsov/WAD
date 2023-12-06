<template>
  <HeaderComponent></HeaderComponent>
  <ContactComponent></ContactComponent> 
  <FooterComponent></FooterComponent>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue';

export default {
  name: 'Contactview',
  components: {
    HeaderComponent,
    ContactComponent,
    FooterComponent
  },
};
</script>
