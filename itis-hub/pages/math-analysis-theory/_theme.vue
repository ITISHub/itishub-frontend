<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3"> {{ $route.params.theme }} </h1>
      <p class="theme-description">
        theme description
      </p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "_theme"
  }
</script>

<style scoped>
  .theme-description {
    height: 40vh;
    display: grid;
    place-items: center;
  }
</style>
