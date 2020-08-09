<template>
  <v-container class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3 discipline-title">Математический анализ</h1>
      <p class="description">
        теория
      </p>
      <h4>темы:</h4>
      <template v-if="themes.length === 0">
        <p class="in-development">контент в разработке</p>
      </template>
    </v-container>
    <div class="info-container mb-5">

      <a
        v-for="theme in themes"
        :key="theme.link"
        @click="openTheme(theme.name)"
      >
        <DynamicCard :title="theme.name"/>
      </a>
    </div>
  </v-container>
</template>

<script>
  import DynamicCard from "../../components/DynamicCard";
  export default {
    name: "math",
    components: {DynamicCard},
    data () {
      return {
        // динамический роутинг работает, но в пути кириллица 0_о
        themes: [
          {name: 'Несчетность множества R'},
          {name: 'Предел последовательности'},
          {name: 'Элементарные свойства пределов'},
          {name: 'Арифметические с-ва пределов'},
          {name: 'Основные свойства пределов, лемма о вложенных отрезках'},
          {name: 'e - как предел последовательности'},
        ]
      }
    },
    methods: {
      openTheme(name) {
        this.$router.push('/math-analysis-theory/' + name);
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

  @media screen and (max-width: 431px){
      .discipline-title {
        font-size: 25px;
      }
  }
</style>
