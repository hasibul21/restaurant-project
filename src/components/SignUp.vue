<template>
  <div>
    <img height="150" src="../assets/images/Restaurant-Logo.png" alt="" />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" id=" name" placeholder="Name" />
      <input type="text" id="email" placeholder="Email" />
      <input type="password" id="" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.register input {
  display: block;
  width: 301px;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(99, 142, 35);
  outline: none;
}

.register button {
  width: 120px;
  height: 30px;
  margin-top: 10px;
  border: 1px solid black;
  background: rgb(0, 83, 115);
  color: white;
}
</style>
