<template>
  <div>
    <HeaderComp />
    <h1>Hello {{name}}, welcome to HomeComp</h1>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
export default {
  name: "HomeComp",
  components: {
    HeaderComp,
  },
  data() {
      return {
        name: ''
    };
  },
  mounted() {
      let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style></style>
