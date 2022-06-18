<template>
  <div>
    <HeaderComp />
    <h1>Hello {{ name }}, welcome to HomeComp</h1>
    <br> <br>
    <h2>Restaurant List</h2> <br>
    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Location</th>
        <th>Contact</th>
        <th>Action</th>
      </thead>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.contact }}</td>
        <td><router-link :to="/update/+item.id">Update</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComp from "./HeaderComp.vue";
export default {
  name: "HomeComp",
  components: {
    HeaderComp,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    console.log(result);
    this.restaurants = result.data;
  },
};
</script>

<style>
table{
    margin: auto;
    padding: 30px;
    background: rgb(249, 249, 249);
}
table td{
    width: 250px;
    height: 100px;
    border: 1px solid black;
}
</style>
