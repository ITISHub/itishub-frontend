<template>
  <div>
    <v-container class="greeting">
      <h1 class="mb-3">Выберите предмет</h1>
      <p class="description">
        На сайте есть разборы теоретических и практических задач первого курса
        ИТИСа, конспекты и прочие полезные материалы
      </p>
      <div>
      <v-container class="menu-content">
        <DynamicCard
          v-for="card in disciplines"
          :key="card.id"
          class="menu-content__card"
          :title="card.title"
          :link="card.url"
          title-size="20"
          target="__blank"
        />
      </v-container>
      </div>
    </v-container>
  </div>
</template>
<script>
import MenuContainer from "../components/cards/MenuContainer";
import DynamicCard from "~/components/cards/DynamicCard.vue";
export default {
  name: "Disciplines",
  transitions: "disciplines",
  components: { MenuContainer, DynamicCard },
  data() {
    return {
        disciplines: [
          {
            id: 2,
            title: "Матанализ",
            url: "https://www.youtube.com/playlist?list=PLsoqA_9bazReZopDB8TxA9Zo4gajnEXx0",
          },
          {
            id: 4,
            title: "Дискретная математика",
            url: "https://www.youtube.com/playlist?list=PLsoqA_9bazRcJltdojN1tlJzaqh7orrES",
          },
          {
            id: 1,
            title: "Сети",
            url: "https://youtube.com/playlist?list=PLsoqA_9bazRcy3x8CYVifhJe8LtomSY73&si=p1nLM8-sjXxx9Msc",
          }, 
          {
            id: 3,
            title: "Алгебра и Геометрия",
            url: "https://www.youtube.com/playlist?list=PLsoqA_9bazReQB4B3teAoorTTl6UDxQnX",
          },
      ] 
    }
  },
};
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

.menu-content {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}

.menu-content__card {
  margin: 5px;
}
</style>
