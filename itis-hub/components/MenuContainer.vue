<template>
  <v-container class="content-container">
    <DynamicCard
      v-for="card in menuElements"
      :key=card.id
      :title=card.title
      :link=card.url
      title-size="20"
    />
  </v-container>
</template>

<script>
  import DynamicCard from "./DynamicCard";
  export default {
    name: "MenuContainer",
    components: {DynamicCard},
    props: {
      menuElements: Array,
    },
  }
</script>

<style scoped>
  .content-container {
    max-width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }

  .content-container a {
    margin: 5px;
  }
</style>
