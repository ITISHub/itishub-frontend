<template>
  <div class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3">Welcome to the hub, Buddy</h1>
      <p class="description">На сайте есть разборы теоретических и практических
        задач первого курса ИТИСа, конспекты и прочие полезные материалы
      </p>
    </v-container>
    <DisciplineSelect class="mb-3" :courses="courses"/>
  </div>
</template>

<script>
  import DisciplineSelect from "../components/DisciplineSelect";
    export default {
        name: "disciplines",
        transitions: 'disciplines',
        components: {DisciplineSelect},
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
</style>
