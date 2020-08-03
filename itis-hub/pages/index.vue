<template>
  <div class="content-container">
    <HeaderBar />
    <v-container class="greeting">
      <h1>Здесь мы ботаем...</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MainContent />
  </div>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
import CardContent from "../components/CardContent";
import MainContent from "../components/MainContent";

export default {
  components: {
    MainContent,
    CardContent,
    HeaderBar,
  },
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
