<template>
  <div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="add">Add Restaurant</router-link>
      <a v-on:click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  methods: {
    logout() {
          localStorage.clear();
      this.$router.push({name: 'login'})
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.nav {
  background-color: rgb(0, 83, 115);
  padding: 20px;
  margin-bottom: 20px;
}
.nav a {
  color: white;
  font-size: 20px;
  padding: 14px;
  margin: 10px;
  text-decoration: none;
  transition: ease 0.3s;
}
.nav a:hover {
  color: skyblue;
}
</style>
