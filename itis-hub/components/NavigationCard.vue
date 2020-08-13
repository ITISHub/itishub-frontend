<template>
  <nuxt-link :to="link" no-prefetch>
    <v-card
      class="card-container"
    >
      <p class="card-title" style="text-align: center; word-break: keep-all"> {{ title }}</p>
    </v-card>
  </nuxt-link>
</template>

<script>
  export default {
    name: "NavigationCard",
    props: {
      title: String,
      link: String,
      event: String,
    }
  }
</script>

<style scoped>
  .card-container {
    height: 280px;
    /*border-radius: 15px !important;*/
    display: grid;
    place-items: center;
    background-color: #385F73;
    transition: all 0.5s;
    /*background-image: url("https://i.redd.it/73whdvrvhl111.jpg");*/
    border-radius: 10px !important;
    /*background: #385F73 url("~assets/card-images/about.jpg");*/
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
  }

  .card-container:hover {
    background-color: #4789a2;
    /*border-radius: 25px !important;*/
    /*box-shadow: 0 0 20px black;*/
  }
</style>
