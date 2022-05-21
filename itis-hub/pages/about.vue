<template>
  <div class="about-wrapper">
    <v-container>
      <h2 class="mb-3">Разработчики</h2>
      <p>thx</p>
    </v-container>
    <v-container v-if="getCreators.length === 0" class="loading-content">
      <v-progress-circular
        :size="50"
        color="#33aade"
        indeterminate
      ></v-progress-circular>
    </v-container>
    <div v-else class="about-wrapper__developers developers">
      <DeveloperCard
        v-for="developer in getCreators"
        :key="developer.name"
        class="developers__card"
        :name="developer.name + ' ' + developer.surname"
        :duties="developer.about"
        :image="developer.avatar"
        :github="developer.github"
        :telegram="developer.telegram"
        :vk="developer.vk"
      />
    </div>
  </div>
</template>

<script>
import DeveloperCard from "../components/cards/DeveloperCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "About",
  components: { DeveloperCard },
  async fetch() {
    await this.loadCreators();
  },
  methods: {
    ...mapActions("creators", ["loadCreators"]),
  },
  computed: {
    ...mapGetters("creators", ["getCreators"]),
  },
};
</script>

<style scoped>
.about-wrapper {
  margin: 0 auto;
  max-width: 450px;
  text-align: center;
  margin-top: 2em;
}

@media screen and (max-width: 568px) {
  .about-wrapper {
    max-width: 300px;
  }
}

.about-wrapper__developers {
  min-height: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.loading-content {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.developers__card {
  margin-bottom: 40px;
  justify-self: center;
}
</style>
