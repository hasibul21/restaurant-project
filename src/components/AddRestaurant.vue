<template>
  <div>
    <HeaderComp />
    <h1>Hello user, welcome to AddRestaurant</h1>
    <br />
    <br />
    <h2>Add a Restaurant</h2>
    <br />
    <form class="add">
      <input
        type="text"
        id="name"
        placeholder="Restaurant Name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        id="location"
        placeholder="Restaurant Location"
        v-model="restaurant.location"
      />
      <input
        type="text"
        id="contact"
        placeholder="Contact Number"
        v-model="restaurant.contact"
      />
      <button type="button" v-on:click="add">Submit</button>
    </form>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios"

export default {
  name: "AddRestaurant",
  components: {
    HeaderComp,
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },

  data() {
    return {
      restaurant: {
        name: '',
        location: '',
        contact: ''
      },
    };
  },

  methods: {
    async add() {
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        location: this.restaurant.location,
        contact: this.restaurant.contact,
      });

      console.log(result);

      if (result.status == 201) {
        this.$router.push({name: 'HomeComp'})
      }
    },
  }
};
</script>

<style></style>
