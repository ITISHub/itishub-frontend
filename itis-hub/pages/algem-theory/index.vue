<template>
  <v-container class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 discipline-title">Алгебра и Геометрия</h1>
      <p class="description">теория</p>
      <h4>темы:</h4>
      <template v-if="lessons.length === 0">
        <p class="in-development">контент в разработке</p>
      </template>
    </v-container>
    <div class="info-container">
        <DynamicCard
          v-for="lesson in lessons"
          :key="lesson.id"
          :title="lesson.title"
          :lesson-id="lesson.id"
          link="/algem-theory/"
        />
    </div>
  </v-container>
</template>

<script>
  import DynamicCard from "../../components/DynamicCard";
  export default {
    name: "algem-theory",
    components: {DynamicCard},
    methods: {
    },
    async fetch({ store }) {
      // нужно сделать lessons.js более универсальным, для оптимизации (делать меньше запросов)
      if (store.getters['lessons/algemLessons'].length === 0) {
        await store.dispatch('lessons/loadLessons', process.env.courseId.alGem)
      }
    },
    computed: {
      // в props'ах теперь есть lessons
      lessons() {
        return this.$store.getters['lessons/algemLessons']
      },
    },
  }
</script>

<style scoped>
  .content-container {
    max-width: 700px;
    margin: 0 auto;
  }

  .info-container {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }

  .info-container li {
    margin-bottom: 3px;
  }

  .info-container a {
    margin: 5px;
  }

  @media screen and (max-width: 431px){
    .discipline-title {
      font-size: 25px;
    }
  }
</style>
