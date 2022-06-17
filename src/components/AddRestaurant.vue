<template>
    <div>
        <HeaderComp/>
        <h1>Hello user, welcome to AddRestaurant</h1>
    </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
export default {
    name: "AddRestaurant",
    mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
        this.$router.push({name: 'SignUp'})
      }
    },
    components: {
        HeaderComp
    }
}
</script>

<style>
</style>