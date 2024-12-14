<template>
  <h2>One</h2>
  <p>  
     <router-link to="/two"><button> TWO PAGE</button></router-link> 
 </p>
  <p> 
    <button @click="goToThreePage">THREE PAGE</button> 
</p>


</template>

<script>
export default {
    methods: {
        goToThreePage() {
            this.$router.push('/three')
        }
    }

}
</script>

<style>

</style>