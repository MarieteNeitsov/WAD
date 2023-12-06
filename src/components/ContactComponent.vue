<template>
    <div>
        <h2>Contact us</h2>

    <div class="formcard" v-if="!formSubmitted">
       <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />

        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
        <div v-if="formSubmitted">
        <p>Form submitted successfully! Thank you for reaching out.</p>
        </div>
    </div>

</template>
<script>
export default {
name: 'ContactComponent',
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formSubmitted: false, 
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.formData);
      this.formSubmitted = true;
    },
  },
};
</script>

<style scoped>

</style>