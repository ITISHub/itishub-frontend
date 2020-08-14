<template>
    <v-card
      class="card-container"
    >
      <p class="card-title"> {{ lessonInfo.title }} </p>
    </v-card>
</template>

<script>
  export default {
    name: "DynamicCard",
    props: {
      lessonInfo: Object,
      // just without link-parameter
    },
  }
</script>

<style scoped>
  .card-container {
    padding: 15px;
    min-height: 280px;
    display: grid;
    place-items: center;
    background-color: #385F73;
    transition: all 0.5s;
    border-radius: 10px !important;
  }

  @media screen and (max-width: 464px) {
    .card-container {
      min-height: 150px;
    }
  }

  .card-title {
    word-wrap: break-word;
    font-size: 15px;
    color: white;
    text-align: center;
    word-break: normal;
  }

  .card-container:hover {
    background-color: #4789a2;
  }
</style>
