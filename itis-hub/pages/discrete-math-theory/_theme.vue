<template @send-object="">
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 theme-title"> {{ currentLesson.title }} </h1>
      <p class="theme-description">
        {{ currentLesson.description }}
      </p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "_theme",
    props: {
      lessonInfo: Object,
    },
    data () {
      return {
        currentLesson: '',
      }
    },
    async created() {
      const response = await fetch('http://localhost:1337/api/v1/courses/2');
      let cource = await response.json();
      for (let i = 0; i < cource.lessons.length; i++) {
        if (cource.lessons[i].id == this.$route.params.theme) {
          this.currentLesson = cource.lessons[i];
        }
      }
    },
  }
</script>

<style scoped>
  .theme-description {
    height: 40vh;
    display: grid;
    place-items: center;
  }
</style>
