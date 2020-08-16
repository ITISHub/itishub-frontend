<template>
  <div>
    <v-container class="greeting">
      <h1 class="mb-3">Выберите предмет</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <MenuContainer :menu-elements="courses"/>
  </div>
</template>

<script>
  import MenuContainer from "../components/MenuContainer";
    export default {
        name: "disciplines",
        transitions: 'disciplines',
        components: {MenuContainer},
        async fetch({ store }) {
          if (store.getters['courses/courses'].length === 0) {
            await store.dispatch('courses/loadCourses')
          }
        },
        computed: {
          // в props'ах теперь есть creators
          courses() {
            return this.$store.getters['courses/courses']
          },
        }
    }
</script>

<style scoped>
  .greeting {
    text-align: center;
    margin-top: 2em;
  }

  .description {
    max-width: 600px;
    margin: auto;
  }
</style>
