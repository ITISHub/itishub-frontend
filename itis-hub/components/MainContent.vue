<template>
    <v-container class="content-container">
      <NavigationCard title="разборы теории" link="/disciplines"/>
      <NavigationCard title="разборы практики" link="/"/>
      <NavigationCard title="о нас" link="/about"/>
      <NavigationCard title="стримы Урала" link="/"/>
      <NavigationCard title="coming soon" link="/"/>
    </v-container>
</template>

<script>
    import NavigationCard from "./NavigationCard";
    export default {
        name: "MainContent",
      components: {NavigationCard}
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
