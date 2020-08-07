<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3"> {{ $route.params.theme }} </h1>
      <p class="description">
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

</style>
