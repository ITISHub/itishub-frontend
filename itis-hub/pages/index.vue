<template>
  <div class="content-container">
    <HeaderBar />
    <v-container class="greeting">
      <h1>Здесь мы ботаем...</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
  </div>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";

export default {
  components: {HeaderBar},
  data() {
    return {}
  },
}
</script>

<style>
.greeting {
  text-align: center;
  margin-top: 2em;
}

.description {
  max-width: 600px;
  margin: auto;
}
</style>
