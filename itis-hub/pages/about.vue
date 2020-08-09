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
        :name=developer.name
        :duties=developer.duties
        :image=developer.image
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
            developers: [
              {
                name: 'Elon Musk',
                image: 'marat.jpg',
                duties: 'content',
                github: 'https://github.com/',
                telegram: 'https://telegram.org/',
                vk: 'https://vk.com/'
              },
            ]
          };
        },
      async created() {
        const response = await fetch('http://127.0.0.1:1337/api/v1/creators/');
        this.developers = await response.json()      
      }  
    }
</script>

<style scoped>
  .about-wrapper {
    margin: 0 auto;
    max-width: 700px;
    text-align: center;
  }

  .developers {
    min-height: 400px;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-column-gap: 15px;
    justify-items: center;
  }

  .developers div {
    margin-bottom: 20px;
  }
</style>
