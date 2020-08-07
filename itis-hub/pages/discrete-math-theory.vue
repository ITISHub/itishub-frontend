<template>
  <v-container class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3">Дискретная математика</h1>
      <p class="description">практика
      </p>
      <h4>темы:</h4>
    </v-container>
    <div class="info-container mb-5">

        <CardContent
          v-for="theme in themes"
          :title="theme"
          link="/"
        />
      </div>
  </v-container>
</template>

<script>
    import CardContent from "../components/CardContent";
    export default {
      name: "discrete-math",
      components: {CardContent},
      data () {
        return {
          themes: ['Теорема Кантора', 'СДНФ, СКНФ', 'Метод Блейка',
            'Метод Квайна', 'Метод Нельсона', 'Полином Жегалкина',
            'Классы Поста', 'T0, T1, M, S', ]
        }
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
</style>
