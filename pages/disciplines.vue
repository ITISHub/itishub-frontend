<template>
  <div>
    <v-container class="greeting">
      <h1 class="mb-3">Выберите предмет</h1>
      <p class="description">
        На сайте есть разборы теоретических и практических задач первого курса
        ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MenuContainer :menu-elements="getCourses" />
  </div>
</template>

<script>
import MenuContainer from "../components/cards/MenuContainer";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Disciplines",
  transitions: "disciplines",
  components: { MenuContainer },
  async fetch() {
    await this.loadCourses();
  },
  computed: {
    ...mapGetters("courses", ["getCourses"]),
  },
  methods: {
    ...mapActions("courses", ["loadCourses"]),
  },
};
</script>

<style scoped>
.greeting {
  text-align: center;
  margin-top: 2em;
}

.description {
  max-width: 600px;
  margin: auto;
}
</style>
