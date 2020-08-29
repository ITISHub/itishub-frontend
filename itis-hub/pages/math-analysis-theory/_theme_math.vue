<template>
  <v-container class="theme">
    <h1 class="mb-8 theme__title"> {{ currentLesson.title }} </h1>
    <div class="theme__video-wrapper wrapper">
      <iframe
        :src="currentLesson.video_url"
        class="wrapper__video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <p class="mt-5" id="description">
      <span v-html="currentLesson.description"></span>
    </p>
    <p>
      Полезные ссылки:
    </p>npm
    <ul class="theme__list-of-links">
      <li
        v-for="link in currentLesson.useful_links"
        :key="link.link"
      >
        <a :href="link.url" target="_blank">
          {{ link.title }}
        </a>
      </li>
      <li>
        <a :href="currentLesson.pdf_file" target="_blank">
          Конспект &#128196;
        </a>
      </li>
    </ul>
  </v-container>
</template>

<script>
  export default {
    name: "theme-math",
    props: {
      lessonInfo: Object,
    },
    async validate({params, store}) {
      // добавлено, чтобы работали обновления, чекай nuxtServerInit, по хорошему не нужно выносить логику из fetch
      if (store.getters['lessons/mathanLessons'].length === 0) {
        await store.dispatch('lessons/loadLessons', process.env.courseId.mathAn)
      }
      return store.getters['lessons/mathanLessons'].some(lesson => lesson.id == params.theme_math)
    },
    // делается для того, чтобы исключить ошибку, когда свойство title берется от undefined, при ручном вводе ID урока
    // в адресную строку, по хорошему нужно убрать этот запрос из логики страницы темы (а может и нет 0_о)
    async fetch({ store }) {
      // нужно сделать lessons.js более универсальным, для оптимизации (делать меньше запросов)
      if (store.getters['lessons/mathanLessons'].length === 0) {
        await store.dispatch('lessons/loadLessons', process.env.courseId.mathAn)
      }
    },
    computed: {
      // в props'ах теперь есть lessons
      lessons() {
        return this.$store.getters['lessons/mathanLessons']
      },
      // поиск нужного lesson'a
      currentLesson() {
        for (let i = 0; i < this.lessons.length; i++) {
          if (this.lessons[i].id == this.$route.params.theme_math) {
            return this.lessons[i];
          }
        }
      },
    },
  }
</script>

<style scoped>
  .theme {
    text-align: center;
    margin-top: 40px;
  }

  .theme__video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .theme__video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrapper__video {
    border: 2px solid white;
  }

  .theme__list-of-links {
    text-align: left;
    text-decoration: none;
  }

  #description {
    text-align: left;
  }
</style>
