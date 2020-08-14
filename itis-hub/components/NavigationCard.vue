<template>
  <nuxt-link :to="link" no-prefetch>
    <v-card
      class="card-container"
    >
      <p class="card-title"> {{ title }} </p>
    </v-card>
  </nuxt-link>
</template>

<script>
  export default {
    name: "NavigationCard",
    props: {
      title: String,
      link: String,
    }
  }
</script>

<style scoped>
  .card-container {
    height: 280px;
    display: grid;
    place-items: center;
    background-color: #385F73;
    transition: all 0.5s;
    border-radius: 10px !important;
  }

  @media screen and (max-width: 464px) {
    .card-container {
      height: 150px;
    }
  }

  .card-title {
    max-width: 150px;
    font-size: 20px;
    color: white;
    text-align: center;
    word-break: keep-all;
  }

  .card-container:hover {
    background-color: #4789a2;
  }
</style>
