<template>
  <div class="info-container">
    <h1 class="meetup-name">Student Developer Academy</h1>
    <div class="info-container">
      <p class="description">
        Площадка на которой студенты могут поделиться промышленным опытом
        разработки и попробовать себя в роли спикера. Встречи проводятся в
        формате митапов.
      </p>
      <div class="contact-info">
        <p class="info-icon">ℹ️</p>
        <p class="info-description">
          Подать заявку на доклад можно написав нам на
          <a class="email" href="mailto:itis-hub@gmail.com"
            >itishub.adm@gmail.com</a
          >
        </p>
      </div>
    </div>
    <ul class="meetup-list">
      <Meetup v-for="meetup of meetups" :key="meetup.title" :meetup="meetup" />
    </ul>
  </div>
</template>

<script>
import Meetup from "../../components/meetup/Meetup.vue";

export default {
  components: {
    Meetup,
  },
  data() {
    return {
      // move to API
      meetups: [
        {
          title: "SDA, пилотный митап",
          date: "03.06.2022",
          description:
            "Собрали доклады ребят про опыт работы в продуктовых компаниях, интересных задачах, постороении процессов внутри команд.",
          speakers: [
            {
              name: "Даниил Трофимов",
              avatar: require("~/assets/card-images/speakers/danya.png"),
              company: "Sbermarket",
              description:
                "Кто такой FrontOps? Расскажу про команду платформы фронтенда",
            },
            {
              name: "Аделя Сабирзянова",
              avatar: require("~/assets/card-images/speakers/adelya.png"),
              company: "Tinkoff",
              description:
                "Почему важен системный анализ? Расскажу про Системную аналитику в команде лояльности",
            },
            {
              name: "Расим Гарипов",
              avatar: require("~/assets/card-images/speakers/rasim.png"),
              company: "Piano",
              description:
                "Несколько инструментов DataOps, которые могут вам пригодиться: Flyway, Percona Toolkit",
            },
          ],
          link: "https://forms.gle/2SpmruWHj6Ri6nucA",
        },
      ],
    };
  },
};
</script>

<style scoped>
.meetup-name {
  margin: 30px auto 20px auto;
  text-align: center;
  width: 70%;
}

.info-container {
  width: 100%;
  padding: 10px 20px 0 20px;
}

.contact-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.info-icon {
  font-size: 40px;
}

.meetup-list {
  list-style-type: none;
  padding: 0 !important;
}

.meetup {
  display: flex;
  flex-direction: column;
}

.email {
  color: var(--color);
  text-decoration: underline;
}

@media screen and (max-width: 568px) {
  .meetup-name {
    font-size: 25px;
  }

  .info-icon {
    font-size: 35px;
  }
}

@media screen and (max-width: 390px) {
  .meetup-name {
    font-size: 20px;
  }

  .info-icon {
    font-size: 30px;
  }
}
</style>
