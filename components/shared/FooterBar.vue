<template>
  <v-footer id="footer" absolute>
    <v-row class="footer-bar">
      <v-col class="footer-bar__feedback feedback">
        <h4>На связи</h4>
        <p>Хотите предложить тему или нашли баг? Пишите!</p>
        <v-btn
          color="#33aade"
          depressed
          class="feedback__write-button"
          @click="feedbackDialog = !feedbackDialog"
        >
          написать
        </v-btn>
        <v-dialog v-model="feedbackDialog" max-width="400">
          <FormDialog @close-form="closeForm" />
        </v-dialog>
      </v-col>
      <v-col class="footer-bar__social-media social-media">
        <p class="social-media__links-title">мы в соц. сетях</p>
        <div class="mr-2 mt-n3">
          <v-btn icon href="https://vk.com/public198540649" target="_blank">
            <img src="~assets/icons/vk.svg" alt="youtube" height="28" />
          </v-btn>
          <v-btn
            icon
            href="https://www.youtube.com/@itishub333/videos"
            target="_blank"
          >
            <img src="~assets/icons/youtube.svg" alt="youtube" height="42" />
          </v-btn>
        </div>
        <p class="links-title social-media__links-title">
          oбщайтесь и пишите <br />
          код вместе с нами
        </p>
        <div class="mr-2 mt-n3">
          <v-btn
            icon
            href="https://github.com/ITISHub/itishub-frontend"
            target="_blank"
          >
            <img src="~assets/icons/github.svg" alt="github" height="36" />
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-card-text class="py-2 text-center">
      <strong>ITIS-hub</strong> — {{ new Date().getFullYear() }}
    </v-card-text>
  </v-footer>
</template>

<script>
import FormDialog from "./FormDialog";
export default {
  name: "FooterBar",
  components: { FormDialog },
  data() {
    return {
      feedbackDialog: false,
    };
  },
  methods: {
    closeForm() {
      this.feedbackDialog = false;
    },
  },
};
</script>

<style scoped>
.footer-bar {
  max-width: 650px;
  margin: 0 auto;
}

.footer-bar__feedback {
  text-align: left;
}

.footer-bar__social-media {
  text-align: right;
}

.social-media__links-title {
  font-size: 17px;
}

.feedback__write-button {
  font-size: 15px;
  letter-spacing: normal;
  text-transform: none;
  color: white;
}

@media screen and (max-width: 431px) {
  .social-media__links-title,
  .footer-bar__feedback {
    font-size: 13px;
  }
}
</style>
