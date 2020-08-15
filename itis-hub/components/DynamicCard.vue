<template>
  <a @click="openLink(link, lessonId)">
    <v-card
      class="card-container"
    >
      <p
        class="card-title"
        :style="{'font-size': titleSize + 'px'}"
      >
        {{ title }}
      </p>
    </v-card>
  </a>
</template>

<script>
  export default {
    name: "DynamicCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      titleSize: String,
      // пропсы для навигации
      lessonId: Number,
      link: String,
    },
    // желательно заменить на что-то более обощенное
    methods: {
      openLink(link, lessonId) {
        if (lessonId === undefined) {
          this.$router.push(link)
        } else this.$router.push(link + lessonId)
      },
    },
  }
</script>

<style scoped>
  .card-container {
    padding: 15px;
    min-height: 280px;
    display: grid;
    place-items: center;
    background-color: #385F73;
    transition: all 0.5s;
    border-radius: 10px !important;
  }

  @media screen and (max-width: 464px) {
    .card-container {
      min-height: 150px;
    }
  }

  .card-title {
    max-width: 150px;
    font-size: 15px;
    color: white;
    text-align: center;
    word-break: normal;
  }

  .card-container:hover {
    background-color: #4789a2;
  }
</style>
