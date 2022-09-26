<template>
  <li
    class="meetup-container"
    v-on:mouseover="onMeetupHover"
    v-on:mouseleave="onMeetupLeave"
  >
    <h2 :id="meetup.anchor" class="meetup-title">
      {{ meetup.title }}
    </h2>
    <p>
      {{ meetup.date }}
      <v-btn
        :class="
          isMeetupHover ? 'meetup-link' : 'meetup-link meetup-link__title-hover'
        "
        icon
        color="grey"
        @click="onCopyClick"
      >
        🔗
      </v-btn>
    </p>
    <p>{{ meetup.description }}</p>
    <h3 class="meetup-program-title">Программа митапа:</h3>
    <ul class="meetup-program" v-if="meetup.speakers.length > 0">
      <li
        class="speaker"
        v-for="speaker of meetup.speakers"
        :key="speaker.name"
      >
        <div class="speaker-avatar-container">
          <div
            class="speaker-avatar"
            :style="{
              'background-image': 'url(' + speaker.avatar + ')',
            }"
          ></div>
          <img :src="speaker.avatar" alt="" />
        </div>
        <div class="speaker-description">
          <p class="speaker-name">
            {{ speaker.name }},
            <span class="speaker-company">{{ speaker.company }}</span>
          </p>
          <p>{{ speaker.description }}</p>
          <a :href="speaker.slides" target="_blank" class="slides-link"
            >слайды</a
          >
        </div>
      </li>
    </ul>
    <p v-else class="empty-program-message">В разработке</p>
    <div v-if="meetup.active" class="timepad-info">
      <p>Зарегистрироваться на мероприятие можно здесь:</p>
      <v-btn
        color="#33aade"
        link
        depressed
        class="timepad-button"
        :href="meetup.link"
        target="_blank"
      >
        записаться
      </v-btn>
    </div>
    <v-snackbar
      v-model="showFlash"
      timeout="2000"
      content-class="flash-content"
      outlined
      dark
    >
      ссылка скопирована в буфер 👍
    </v-snackbar>
  </li>
</template>

<script>
export default {
  name: "Meetup",
  props: {
    meetup: Object,
  },
  data() {
    return {
      isMeetupHover: false,
      showFlash: false,
    };
  },
  methods: {
    onMeetupHover() {
      this.isMeetupHover = true;
    },
    onMeetupLeave() {
      this.isMeetupHover = false;
    },
    async onCopyClick() {
      await navigator.clipboard.writeText(
        process.env.hostUrl + $nuxt.$route.path + "#" + this.meetup.anchor
      );
      this.showFlash = true;
    },
    onClickCloseFlash() {
      this.showFlash = false;
    },
  },
};
</script>

<style>
.meetup-container {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: background-color 0.5s;
  padding: 15px 15px 5px 15px;
}

.meetup-title {
  font-size: 30px;
}

.meetup-link {
  opacity: 1;
  transition: opacity 0.3s;
  border-radius: 50%;
  font-size: 25px !important;
}

.meetup-link__title-hover {
  opacity: 0;
}

.empty-program-message {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meetup-program-title {
  font-size: 22px;
  margin-bottom: 20px;
}

.meetup-program {
  list-style-type: none;
  padding: 0 !important;
}

.speaker {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
}

.speaker-avatar-container {
  width: 100px;
  height: 100px;
  border: 3px white solid;
  border-radius: 50%;
  overflow: hidden;
}

.speaker-avatar {
  background-size: cover;
  background-color: lightgray;
  width: 100%;
  height: 100%;
}

.speaker-name {
  font-size: 25px;
}

.speaker-description {
  width: 65%;
}

.speaker-company {
  font-weight: bold;
}

/* .meetup-container:hover {
  background-color: var(--lighten_bg);
} */

.slides-link {
  color: #000 !important;
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 20px;
  transition: background-color 0.3s;
  transition: border-radius 0.3s;
  border: 1px #bcbcbc solid;
}

.slides-link:hover {
  background-color: #bbb9b9;
  border: 1px #bcbcbc solid;
}

.timepad-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-bottom: 5px;
}

.timepad-info > p {
  margin-bottom: 0;
}

.timepad-button {
  font-size: 15px;
  letter-spacing: normal;
  text-transform: none;
  color: #fff !important;
}

.flash-content {
  display: flex;
  justify-content: center;
  width: 200px !important;
}

@media screen and (max-width: 568px) {
  .meetup-title {
    font-size: 25px;
  }
}

@media screen and (max-width: 390px) {
  .meetup-container {
    margin-top: 30px;
  }

  .meetup-title {
    font-size: 22px;
  }

  .speaker-description {
    font-size: 13px;
  }

  .meetup-program-title {
    font-size: 18px;
  }

  .speaker-avatar-container {
    width: 70px;
    height: 70px;
  }

  .speaker-name {
    font-size: 18px;
  }

  .timepad-info {
    flex-wrap: wrap;
  }
}
</style>
