<template>
  <router-view/>
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.register input,  .login input, .add input, .update input{
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

.register button, .login button, .add button, .update button{
  width: 120px;
  height: 30px;
  margin-top: 10px;
  border: 1px solid black;
  background: rgb(0, 83, 115);
  color: white;
  cursor: pointer;
}
</style>
