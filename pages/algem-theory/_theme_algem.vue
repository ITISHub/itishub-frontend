<template>
  <v-container class="theme">
    <h1 class="mb-8 theme__title">{{ currentLesson.title }}</h1>
    <div class="theme__video-wrapper wrapper">
      <iframe
        :src="currentLesson.video_url"
        class="wrapper__video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
    <p id="description" class="mt-5">
      <span v-html="currentLesson.description"></span>
    </p>
    <p>Полезные ссылки:</p>
    <ul class="theme__list-of-links">
      <li v-for="link in currentLesson.useful_links" :key="link.link">
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ThemeAlgem",
  props: {
    lessonInfo: Object,
  },
  async fetch() {
    // TODO: add for API ability to get lessonst from courses by id
    await this.loadLessons(process.env.courseId.alGem);
  },
  computed: {
    ...mapGetters("lessons", ["getAlgemLessons"]),
    currentLesson() {
      for (let i = 0; i < this.getAlgemLessons.length; i++) {
        // comparing int with string
        if (this.getAlgemLessons[i].id == this.$route.params.theme_algem) {
          return this.getAlgemLessons[i];
        }
      }
      return {};
    },
  },
  methods: {
    ...mapActions("lessons", ["loadLessons"]),
  },
};
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
