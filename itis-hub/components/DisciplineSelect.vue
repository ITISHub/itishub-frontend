<template>
  <v-container class="content-container">
    <CardContent title="матанализ" link="/"/>
    <CardContent title="дискретка" link="/"/>
    <CardContent title="алгем" link="/"/>
  </v-container>
</template>

<script>
import CardContent from "./CardContent";
export default {
    name: "DisciplineSelect",
  components: {CardContent}
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
