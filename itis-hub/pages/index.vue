<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3">Welcome to the hub, Buddy</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MenuContainer :menu-elements="homecards"/>
  </div>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
import MenuContainer from "../components/MenuContainer";

export default {
  components: {
    MenuContainer,
    HeaderBar,
  },
  data() {
    return {}
  },
  async fetch({ store }) {
    if (store.getters['homecards/homecards'].length === 0) {
      await store.dispatch('homecards/loadHomecards')
    }
  },
  computed: {
    // в props'ах теперь есть creators
    homecards() {
      return this.$store.getters['homecards/homecards']
    },
  },
  // оптимизация, элемент безопасности
  created() {
    console.log('Равиль, не ломай сайт пж')
  }
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
