<template>
    <v-card
      class="card-container"
    >
      <p class="card-title"> {{ title }}</p>
    </v-card>
</template>

<script>
  export default {
    name: "DynamicCard",
    props: {
      title: String,
      event: String,
      // just without link-parameter
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
