<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 ml-5" id="element"></h1>
      <p class="greeting__description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MenuContainer :menu-elements="homecards"/>
  </div>
</template>

<script>
import HeaderBar from "~/components/HeaderBar.vue";
import MenuContainer from "../components/MenuContainer";
import { typeGreeting } from "../plugins/typeMessage"

export default {
  components: {
    MenuContainer,
    HeaderBar,
  },
  async fetch({ store }) {
    if (store.getters['homecards/homecards'].length === 0) {
      await store.dispatch('homecards/loadHomecards')
    }
  },
  computed: {
    homecards() {
      return this.$store.getters['homecards/homecards']
    },
    isPosted() {
      return this.$store.getters['homecards/message']
    }
  },
  mounted() {
    typeGreeting()
  },

  // оптимизация, элемент безопасности
  created() {
    if (!this.isPosted) console.log('Равиль, не ломай сайт пж');
    this.$store.dispatch('homecards/changeMessage');
  },
}
</script>

<style>
.greeting {
  text-align: center;
  margin-top: 2em;
}

.greeting__description {
  max-width: 600px;
  margin: auto;
}
</style>
