<template>
  <div class="container">
    <h3 class="logo-text">ITIS-hub</h3>
    
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
}
</script>

<style scoped>
  .container {
    width: 1130px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo-text {
    align-self: flex-end;
    margin-bottom: 0.1em;
  }
</style>
