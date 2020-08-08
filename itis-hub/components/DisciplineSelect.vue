<template>
  <v-container class="content-container">
    <NavigationCard title="матанализ" link="/math-analysis-theory"/>
    <NavigationCard title="дискретка" link="/discrete-math-theory"/>
    <NavigationCard title="алгем" link="/algem-theory"/>
  </v-container>
</template>

<script>
import NavigationCard from "./NavigationCard";
export default {
    name: "DisciplineSelect",
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
