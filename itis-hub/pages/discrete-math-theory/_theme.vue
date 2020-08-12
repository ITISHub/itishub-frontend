<template @send-object="">
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 theme-title"> {{ currentLesson.title }} </h1>
      <div class="video-wrapper">
        <iframe class="video"
                         src="https://www.youtube.com/embed/kjArjPZsoIc"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>
        </iframe>
      </div>
      <p class="theme-description mt-3">
        {{ currentLesson.description }}
      </p>
      <p class="useful-links">
        {{  }}
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
  .video {
    width: 560px;
    height: 315px;
  }
</style>
