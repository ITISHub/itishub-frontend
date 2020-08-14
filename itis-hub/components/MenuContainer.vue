<template>
  <v-container class="content-container">
    <NavigationCard
      v-for="card in menuElements"
      :key=card.id
      :title=card.title
      :link="card.url"
    />
  </v-container>
</template>

<script>
  import NavigationCard from "./NavigationCard";
  export default {
    name: "MenuContainer",
    components: {NavigationCard},
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
