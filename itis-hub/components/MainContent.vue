<template>
    <v-container class="content-container">
      <NavigationCard
        v-for="card in homecards"
        :key=card.title
        :title=card.title
        :link="card.url"
      />
    </v-container>
</template>

<script>
    import NavigationCard from "./NavigationCard";
    export default {
      name: "MainContent",
      components: {NavigationCard},
      props: {
        homecards: Array,
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
