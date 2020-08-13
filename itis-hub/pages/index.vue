<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3">Welcome to the hub, Buddy</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MainContent class="mb-3"/>
  </div>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
import CardContent from "../components/NavigationCard";
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
