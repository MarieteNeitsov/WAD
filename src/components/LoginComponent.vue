<template>
    <div class="wrapper">
        <form class="formcard">
            <div class="label-and-input">
                <label for="email">Email: </label>  
                <input type="email" id="email" required v-model="input.email" />
                <label for="password">Password: </label>
                <input type="password" id="password" required v-model="input.password" />
            </div>
            <br>
            <button @click="LogIn" >LogIn</button>
            <button @click='this.$router.push("/SignupView")'>Signup </button>
           
        
        </form>
        

    </div>
</template>




<script>
export default {
  name: 'LoginComponent',
  data(){
    return{
        input:{
            email: "",
            password: ""
        }
    }
    
  },
  methods:{

    LogIn() {
    }
  }

}

</script>