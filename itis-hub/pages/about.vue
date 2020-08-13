<template>
  <div class="about-wrapper">
    <v-container class="greeting">
      <h2 class="mb-3">Разработчики</h2>
      <p>thx</p>
    </v-container>
    <div class="developers">
      <DeveloperCard
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
    data () {
        return {
          developers: []
        };
      },
      async created() {
        const response = await fetch(process.env.baseUrl + process.env.creatorsAccess);
        this.developers = await response.json()
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

  .developers {
    min-height: 400px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .developers div {
    margin-bottom: 40px;
    justify-self: center;
  }
</style>
