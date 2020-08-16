<template>
  <div class="about-wrapper">
    <v-container>
      <h2 class="mb-3">Разработчики</h2>
      <p>thx</p>
    </v-container>
    <div class="about-wrapper__developers developers">
      <DeveloperCard
        class="developers__card"
        v-for="developer in developers"
        :key=developer.name
        :name="developer.name + ' ' + developer.surname"
        :duties=developer.about
        :image=developer.avatar
        :github=developer.github
        :telegram=developer.telegram
        :vk=developer.vk
      />
    </div>
  </div>
</template>

<script>
  import DeveloperCard from "../components/DeveloperCard";
  export default {
      name: "about",
    components: {DeveloperCard},
    async fetch({ store }) {
      if (store.getters['creators/creators'].length === 0) {
        await store.dispatch('creators/loadCreators')
      }
    },
    computed: {
      // в props'ах теперь есть creators
      developers() {
        return this.$store.getters['creators/creators']
      },
    }
  }
</script>

<style scoped>
  .about-wrapper {
    margin: 0 auto;
    max-width: 450px;
    text-align: center;
  }

  @media screen and (max-width: 568px){
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

  .developers__card {
    margin-bottom: 40px;
    justify-self: center;
  }
</style>
