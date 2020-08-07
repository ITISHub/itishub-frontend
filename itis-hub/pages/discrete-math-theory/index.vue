<template>
  <v-container class="content-container">
    <v-container class="greeting">
      <h1 class="mb-3">Дискретная математика</h1>
      <p class="description">практика
      </p>
      <h4>темы:</h4>
    </v-container>
    <div class="info-container mb-5">

        <a
          v-for="theme in themes"
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
      name: "discrete-math-theory",
      components: {DynamicCard},
      data () {
        return {
          // динамический роутинг работает, но в пути кириллица 0_о
          themes: [
            {name: 'Теорема Кантора', link: 'kantor-theory'},
            {name: 'Метод Блейка', link: 'blake-method'},
            {name: 'Метод Нельсона', link: 'nelson-method'}
          ]
        }
      },
      methods: {
        openTheme(theme) {
          this.$router.push('/discrete-math-theory/' + theme);
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
