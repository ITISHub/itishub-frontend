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
          anchor: "pilot",
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
              slides:
                "https://docs.google.com/presentation/d/1eeDpo9tHFd_ssuYdE9okoooqpJAzf84kwungoqRynLU/edit?usp=sharing",
            },
            {
              name: "Аделя Сабирзянова",
              avatar: require("~/assets/card-images/speakers/adelya.png"),
              company: "Tinkoff",
              description:
                "Почему важен системный анализ? Расскажу про Системную аналитику в команде лояльности",
              slides:
                "https://docs.google.com/presentation/d/1-CZzxIFvvNMK5iOhWzfCIzaGwO28wtb2mv0T9pEnDEA/edit?usp=sharing",
            },
            {
              name: "Расим Гарипов",
              avatar: require("~/assets/card-images/speakers/rasim.png"),
              company: "Piano",
              description:
                "Несколько инструментов DataOps, которые могут вам пригодиться: Flyway, Pecona Toolkit",
              slides: "https://files.sberdisk.ru/s/zHdNrx4Ag6ocYKo",
            },
          ],
          link: "https://forms.gle/2SpmruWHj6Ri6nucA",
          active: false,
        },
        {
          anchor: "autumn22",
          title: "SDA, autumn'22 🍁",
          date: "23.09.2022",
          description:
            "Возвращаемся этой осенью с новым митапом SDA! В программе доклады про Soft Skills, Android- и Backend-разработку.",
          speakers: [
            {
              name: "Азат Гилязов",
              avatar: require("~/assets/card-images/speakers/azat.png"),
              company: "Mircod",
              description:
                "Расскажу про Jetpack Compose, познакомимся с технологией и ее устройством под капотом",
              slides:
                "https://docs.google.com/presentation/d/1btIrFLbKHCba8ntYQf3eQjQemxgu9bCSo_q4SqD6KB4/edit?usp=sharing",
            },
            {
              name: "Чулпан Хайруллина",
              avatar: require("~/assets/card-images/speakers/chulpan.png"),
              company: "Stackers",
              description:
                "Что такое WLB и почему о нем все говорят? Коротко о том, как устроен наш организм, почему важно переключаться на разные сферы и как найти СВОЙ баланс",
              slides:
                "https://docs.google.com/presentation/d/1WHodTj3m2hmdbgMb0lOgrVx6CGXAj430_cjRJ1Gp63w/edit?usp=sharing",
            },
            {
              name: "Леонид Тыщенко",
              avatar: require("~/assets/card-images/speakers/lenya.png"),
              company: "Micord",
              description:
                "Micronaut vs Spring Boot, киллер-фичи, разбор контекстов, рассмотрим вместе возможность расширения фреймворков",
              slides:
                "https://docs.google.com/presentation/d/144Ty2tf4vThPFpLarzSVUEZ12H0MYQmh/edit?usp=sharing&ouid=107955849639318665979&rtpof=true&sd=true",
            },
          ],
          link: "https://forms.gle/3eAEkEJZtaMGQ1xZ8",
          active: false,
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
