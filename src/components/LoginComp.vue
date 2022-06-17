<template>
  <div>
    <img height="150" src="../assets/images/Restaurant-Logo.png" alt="" />
    <h1>Login</h1>
    <div class="login">
      <input type="text" id="email" placeholder="Email" v-model="email" />
      <input
        type="password"
        id="password"
        placeholder="Password"
        v-model="password"
      />
      <button v-on:click="login">Login</button>
      <br />
      <router-link to="/sign-up">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginComp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomeComp" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeComp" });
    }
  },
};
</script>
