<template>
  <div class="about-wrapper">
    <v-container>
      <h2 class="mb-3">Разработчики</h2>
      <p>thx</p>
    </v-container>
    <div class="about-wrapper__developers developers">
      <DeveloperCard
        v-for="developer in developers"
        :key="developer.name"
        class="developers__card"
        :name="developer.name + ' ' + developer.surname"
        :duties="developer.about"
        :avatar="developer.avatar"
        :github="developer.github"
        :telegram="developer.telegram"
        :vk="developer.vk"
      />
    </div>
  </div>
</template>

<script>
import DeveloperCard from "../components/cards/DeveloperCard";

export default {
  name: "About",
  components: { DeveloperCard },
  data() {
    return {
      developers: [
        {
          name: "Даниил",
          surname: "Трофимов",
          about: "frontend",
          avatar: "https://avatars.githubusercontent.com/u/44056222?v=4",
          github: "https://github.com/DanTrofimov",
          telegram: "https://t.me/mark_sweep_compact"
        },
        {
          name: "Азат",
          surname: "Гилязов",
          about: "backend",
          avatar: "https://avatars.githubusercontent.com/u/57267956?v=4",
          github: "https://github.com/AnteeOne",
          telegram: "https://t.me/AnteeOne"
        },
        {
          name: "Дмитрий",
          surname: "Железнов",
          about: "content, DevOps",
          avatar: "https://avatars.githubusercontent.com/u/65794683?v=4",
          github: "https://github.com/torelochka",
          telegram: "https://t.me/thunder_voice1"
        },
        {
          name: "Алексей",
          surname: "Дьяконов",
          about: "content",
          avatar: "https://avatars.githubusercontent.com/u/57191485?v=4",
          github: "https://github.com/Xokken",
          telegram: "https://t.me/Xokken"
        },
        {
          name: "Радмир",
          surname: "Султанов",
          about: "content",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
          github: "",
          telegram: ""
        },
        {
          name: "Александр",
          surname: "Динер",
          about: "mobile",
          avatar: "https://avatars.githubusercontent.com/u/32891602?v=4",
          github: "https://github.com/alexandr-d23",
          telegram: "https://t.me/AlexDDD23"
        },
      ]
    }
  }
};
</script>

<style scoped>
.about-wrapper {
  margin: 0 auto;
  max-width: 450px;
  text-align: center;
  margin-top: 2em;
}

@media screen and (max-width: 568px) {
  .about-wrapper {
    max-width: 300px;
  }
}

.about-wrapper__developers {
  min-height: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.loading-content {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.developers__card {
  margin-bottom: 40px;
  justify-self: center;
}
</style>
