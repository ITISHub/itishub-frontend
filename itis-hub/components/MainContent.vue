<template>
    <v-container class="content-container">
      <CardContent title="разборы теории" link="/disciplines"/>
      <CardContent title="разборы практики" link="/"/>
      <CardContent title="о нас" link="/"/>
      <CardContent title="стримы Урала" link="/"/>
      <CardContent title="coming soon" link="/"/>
    </v-container>
</template>

<script>
    import CardContent from "./CardContent";
    export default {
        name: "MainContent",
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
