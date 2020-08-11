<template>
  <v-container class="content-container">
    <NavigationCard
      v-for="discipline in disciplines"
      :key=discipline.id
      :title=discipline.title
      :link=discipline.url
    />
  </v-container>
</template>

<script>
import NavigationCard from "./NavigationCard";
export default {
    name: "DisciplineSelect",
    components: {NavigationCard},
    data () {
      return {
        disciplines: [],
      }
    },
    async created() {
      const response = await fetch('http://localhost:1337/api/v1/courses/');
      this.disciplines = await response.json()
    }
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
