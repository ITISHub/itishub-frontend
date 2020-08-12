<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 theme-title"> {{ $route.params.theme_math }} </h1>
      <p class="theme-description">
        theme description
      </p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "theme"
  }
</script>

<style scoped>
  .theme-description {
    height: 40vh;
    display: grid;
    place-items: center;
  }
</style>
