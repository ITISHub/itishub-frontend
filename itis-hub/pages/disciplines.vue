<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3">Здесь мы ботаем...</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <DisciplineSelect class="mb-3"/>
  </div>
</template>

<script>
    export default {
        name: "disciplines"
    }
</script>

<style scoped>

</style>
