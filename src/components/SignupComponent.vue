<template>
    <div class="wrapper">
        <div class="card">
            <div class="label-and-input">
                <label for="email">Email: </label>  
                <input type="email" id="email" required v-model="input.email" />
                <label for="password">Password: </label>
                <input type="password" id="password" required v-model="input.password" />
            </div>
            <br>
           <button @click="signup"> Signup
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
          <div v-if="isEmailInUse">
            <p>{{ message }}</p>
          </div>
        </div>
        

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
        isPasswordValid: true,
        isEmailInUse: false,
        message: '',
    }
    
  },
  methods:{
    checkPassword(){
        var regex = /^(?=[A-Z])(?=.*[a-z].*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_).{8,15}$/
        this.isPasswordValid = regex.test(this.input.password);
         // ^(?=[A-Z]) looks if password starts with uppercase letter 
        // (?=.*[a-z].*[a-z]) looks for at least two lowercase letters
        // (?=.*[A-Z]) looks for at least one uppercase letter
        //(?=.*\d) looks for at least one digit
        //(?=.*_)  looks for at least one underscore
        // .{8,15} checks if length is 8-15 characters
        // $ end of the string
    },
    async signup() {

      this.checkPassword();

      if (!this.isPasswordValid) {
        return; 
      }

      
      try {
        const response = await fetch('http://localhost:3000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            email: this.input.email,
            password: this.input.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          this.$router.push("/");
          console.log('Signup successful', data);
        } else{
          const errorData = await response.json();

            if (response.status === 400 && errorData.error === 'Email already in use') {
                this.isEmailInUse = true;
                this.message = 'This email is already in use';
            } else {
                console.error('Signup error', response.statusText);
            }
          
        }

      } catch (error) {
        console.error('Signup error', error.message);
        
      }
    },
      
}
}
</script>