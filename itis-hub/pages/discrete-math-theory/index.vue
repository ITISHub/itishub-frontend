<template>
  <v-container class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 discipline-title">Дискретная математика</h1>
      <p class="description">теория</p>
      <h4>темы:</h4>
      <template v-if="getLessons.length === 0">
        <p class="in-development">контент в разработке</p>
      </template>
    </v-container>
    <div class="info-container mb-5">

        <a
          v-for="lesson in getLessons"
          :key="lesson.id"
          @click="openTheme(lesson)"
        >
          <DynamicCard :lesson-info="lesson"/>
        </a>
    </div>
    </v-container>
</template>

<script>
    import DynamicCard from "../../components/DynamicCard";
    export default {
      name: "discrete-math-theory",
      components: {DynamicCard},
      data () {
        return {
          courseData: ''
        }
      },
      methods: {
        openTheme(lesson) {
          this.$router.push('/discrete-math-theory/' + lesson.id);
        },
      },
      async created() {
        const response = await fetch('http://localhost:1337/api/v1/courses/2');
        this.courseData = await response.json();
      },
      computed: {
        getLessons () {
          return this.courseData.lessons;
        },
      }
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
