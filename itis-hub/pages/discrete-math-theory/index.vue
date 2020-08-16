<template>
  <v-container class="content-container discipline">
    <v-container class="greeting">
      <h1 class="mb-3 discipline__title">Дискретная Математика</h1>
      <p class="description">теория</p>
      <h4>темы:</h4>
      <template v-if="lessons.length === 0">
        <p class="in-development">контент в разработке</p>
      </template>
    </v-container>
    <div class="discipline__info-container lessons">
      <DynamicCard
        class="lessons_card"
        v-for="lesson in lessons"
        :key="lesson.id"
        :title="lesson.title"
        :lesson-id="lesson.id"
        link="/discrete-math-theory/"
      />
    </div>
  </v-container>
</template>

<script>
    import DynamicCard from "../../components/DynamicCard";
    export default {
      name: "discrete-math-theory",
      components: {DynamicCard},
      methods: {
        // ткрыть новую страницу
        openTheme(lesson) {
          this.$router.push('/discrete-math-theory/' + lesson.id);
        },
      },
      async fetch({ store }) {
        // нужно сделать lessons.js более универсальным, для оптимизации (делать меньше запросов)
        if (store.getters['lessons/discreteMathLessons'].length === 0) {
          await store.dispatch('lessons/loadLessons', process.env.courseId.discreteMath)
        }
      },
      computed: {
        // в props'ах теперь есть lessons
        lessons() {
          return this.$store.getters['lessons/discreteMathLessons']
        },
      },
    }
</script>

<style scoped>
  .content-container {
    max-width: 700px;
    margin: 0 auto;
  }

  .discipline__info-container {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }

  .lessons_card{
    margin: 5px;
  }

  @media screen and (max-width: 431px){
    .discipline__title {
      font-size: 25px;
    }
  }
</style>
