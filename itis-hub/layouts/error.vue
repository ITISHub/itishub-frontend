<template>
  <div class="error-wrapper">
    <div>
      <h3>An error occurred ¯\_(ツ)_/¯</h3>
      <NuxtLink to="/"> Home page </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style scoped>
.error-wrapper {
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>
