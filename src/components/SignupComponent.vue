<template>
    <div class="wrapper">
        <form>
            <label for="email">Email: </label>
            <input type="text" id="email" v-model="input.email" />
            <label for="password">Password: </label>
           <input type="password" id="password" v-model="input.password" />
           <button type="submit" v-on:click.prevent = "checkPassword()"> Sign up
          </button>

          <div v-if="!isPasswordValid">
            <p>Password is not valid. Please follow the conditions:</p> 
            <ul>
            <li>At least 8 characters and less than 15 characters</li>
            <li>At least one uppercase alphabet character</li>
            <li>At least two lowercase alphabet characters</li>
            <li>At least one numeric value</li>
            <li>Should start with an uppercase alphabet</li>
            <li>Should include the character "_"</li>
            </ul>
        </div>
        </form>
        

    </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'SignupComponent',
  data(){
    return{
        input:{
            email: "",
            password: ""
        },
        isPasswordValid: true
    }
    
  },
  methods:{
    checkPassword(){}
      
}
}
</script>