<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 theme-title"> {{ currentLesson.title }} </h1>
      <div class="video-wrapper">
        <iframe
          :src="currentLesson.video_url"
          class="video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <p class="theme-description mt-5">
        {{ currentLesson.description }}
      </p>
      <p class="useful-links">
        Полезные ссылки:
      </p>
      <p>
        <a :href="currentLesson.link" target="_blank">Ссылка</a>
      </p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "theme",
    props: {
      lessonInfo: Object,
    },
    data () {
      return {
        currentLessonId: '',
      }
    },
    // заполнили lessons
    async fetch({ store }) {
      // нужно сделать lessons.js более универсальным, для оптимизации (делать меньше запросов)
      if (store.getters['lessons/lessons'].length >= 0) {
        await  store.dispatch('lessons/loadUsers', process.env.courseId.discreteMath)
      }
    },
    computed: {
      // в props'ах теперь есть lessons
      lessons() {
        return this.$store.getters['lessons/lessons']
      },
      // поиск нужного lesson'a
      currentLesson() {
        for (let i = 0; i < this.lessons.length; i++) {
          if (this.lessons[i].id == this.$route.params.theme_discrete) {
            return this.lessons[i];
          }
        }
      },
    },
  }
</script>

<style scoped>
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video {
    border: 2px solid white;
  }
</style>
