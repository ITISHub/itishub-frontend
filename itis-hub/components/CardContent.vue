<template>
  <nuxt-link :to="link" @click="">
    <v-card
      class="card-container"
    >
      <p class="card-title"> {{ title }}</p>
    </v-card>
  </nuxt-link>
</template>

<script>
  export default {
    name: "CardContent",
    props: {
      title: String,
      link: String,
      event: String,
    }
  }
</script>

<style scoped>
  .card-container {
    height: 300px;
    /*border-radius: 15px !important;*/
    display: grid;
    place-items: center;
    background-color: #385F73;
    transition: all 0.5s;
    /*background-image: url("https://i.redd.it/73whdvrvhl111.jpg");*/
    border-radius: 10px !important;
    /*background: #385F73 url("~assets/card-images/about.jpg");*/
  }

  .card-title {
    max-width: 150px;
    font-size: 20px;
    color: white;
    text-align: center;
  }

  .card-container:hover {
    background-color: #4789a2;
    border-radius: 25px !important;
    /*box-shadow: 0 0 20px black;*/
  }
</style>
