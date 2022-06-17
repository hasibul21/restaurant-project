<template>
  <div>
    <img height="150" src="../assets/images/Restaurant-Logo.png" alt="" />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" id="name" placeholder="Name" v-model="name" />
      <input type="text" id="email" placeholder="Email" v-model="email" />
      <input
        type="password"
        id="password"
        placeholder="Password"
        v-model="password"
      />
      <button v-on:click="signUp">Sign Up</button>
      <br>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.log(result);

      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name: 'HomeComp'})
      }
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) {
        this.$router.push({name: 'HomeComp'})
      }
    },
};
</script>

<style>

</style>
