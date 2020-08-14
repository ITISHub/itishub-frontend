<template>
  <v-footer absolute id="footer">
    <v-row class="footer-container">
      <v-col class="feedback">
        <h4 class="greet">На связи</h4>
        <p>Нашли баг  или хотите
          с нами связаться? Пишите!
        </p>
        <v-btn
          color="#33aade"
          depressed
          class="write-button"
          @click="feedbackDialog = !feedbackDialog"
        >
          написать
        </v-btn>
        <v-dialog
          v-model="feedbackDialog"
          max-width="400"
        >
          <FormDialog @close-form="closeForm"/>
        </v-dialog>
      </v-col>
      <v-col class="social-media">
        <p class="links-title">мы в соц. сетях</p>
        <div class="mr-2 mt-n3">
          <v-btn icon href="https://www.youtube.com/channel/UCGLOsuM-8wVEgjGUVIq4taQ" target="_blank">
            <img src="~assets/icons/youtube.svg" alt="youtube" height="42">
          </v-btn>
          <v-btn icon>
            <img src="~assets/icons/vk.svg" alt="vk" height="30">
          </v-btn>
          <v-btn icon>
            <img src="~assets/icons/telegram.svg" alt="telegram" height="30">
          </v-btn>
        </div>
        <p class="links-title">oбщайтесь и пишите <br> код вместе с нами</p>
        <div class="mr-2 mt-n3">
          <v-btn icon>
            <img src="~assets/icons/discord.svg" alt="discord" height="40">
          </v-btn>
          <v-btn icon href="https://github.com/ITISHub" target="_blank">
            <img src="~assets/icons/github.svg" alt="github" height="36">
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
  components: {FormDialog},
  data () {
      return {
        feedbackDialog: false,
      }
    },
  methods: {
      closeForm () {
        this.feedbackDialog = false;
      }
  }
}
</script>

<style scoped>
  .footer-container {
    max-width: 650px;
    margin: 0 auto;
  }

  .feedback {
    text-align: left;
  }

  .social-media {
    text-align: right;
  }

  .links-title {
    font-size: 15px;
  }

  .write-button {
    font-size: 15px;
    letter-spacing: normal;
    text-transform: none;
    color: white;
  }

  @media screen and (max-width: 431px) {
    .links-title, .feedback {
      font-size: 13px;
    }
  }
</style>
