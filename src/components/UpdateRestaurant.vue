<template>
  <div>
    <HeaderComp />
    <h1>Hello user, welcome to UpdateRestaurant</h1>
    <br />
    <br />
    <h2>Update a Restaurant</h2>
    <br />
    <form class="update">
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
      <button type="button" v-on:click="update">Submit</button>
    </form>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import axios from "axios";

export default {
  name: "UpdateRestaurant",

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    this.restaurant = result.data;
  },

  components: {
    HeaderComp,
  },

  data() {
    return {
      restaurant: {
        name: "",
        location: "",
        contact: "",
      },
    };
  },

  methods: {
    async update() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          location: this.restaurant.location,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomeComp" });
      }
    },
  },
};
</script>

<style></style>
