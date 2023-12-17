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
           
            <div v-if="errorMessage">
              <p>{{ errorMessage }}</p>
          </div>
        
        </form>
        

    </div>
</template>




<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      input: {
        email: '',
        password: '',
      },
      errorMessage: '',
    };
  },
  methods:{

    LogIn() {


      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: this.input.email,
          password: this.input.password,
        }),
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then(errorMessage => {
          throw new Error(errorMessage);
        });
        }
      })
      .then(data => {
        console.log('Login successful', data);
        this.$router.push("/");
        
      })
      .catch(error => {
        if (error.message.includes('User not found')) {
            this.errorMessage = 'User not found';
          } else if (error.message.includes('Invalid password')) {
            this.errorMessage = 'Invalid password';
          } else {
            this.errorMessage = 'An error occurred during login';
          }
        console.log('Login error', error.message);
      });
    
    }
  }

}

</script>