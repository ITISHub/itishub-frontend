<template>
  <div class="footer">
      <v-row class="footer-container">
        <v-col class="feedback" cols="6">
          <h4>На связи</h4>
          <p>Нашли баг  или хотите
            с нами связаться? Пишите! </p>
        </v-col>
        <v-col class="social-media" cols="6">
          <p class="links-title">мы в соц. сетях</p>
          <div class="links mt-n3">
            <v-btn icon>
              <img src="~assets/icons/youtube.svg" alt="youtube" class="youtube-link">
            </v-btn>
            <v-btn icon>
              <img src="~assets/icons/vk.svg" alt="vk" class="social-media-link">
            </v-btn>
            <v-btn icon>
              <img src="~assets/icons/telegram.svg" alt="telegram" class="social-media-link">
            </v-btn>
          </div>
          <p class="links-title">oбщайтесь и пишите <br> код вместе с нами</p>
          <div class="links mt-n3">
            <v-btn icon>
              <img src="~assets/icons/discord.svg" alt="discord" class="opensource-link">
            </v-btn>
            <v-btn icon>
              <img src="~assets/icons/github.svg" alt="github" class="opensource-link" style="height: 36px">
            </v-btn>
          </div>
        </v-col>
      </v-row>
    <v-card-text class="py-2 white--text text-center">
      <strong>ITIS-hub</strong> — {{ new Date().getFullYear() }}
    </v-card-text>
  </div>
</template>

<script>
export default {
    name: "FooterBar",
    data () {
      return {

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

  .social-media-link {
    height: 30px;
    width: 30px;
  }

  .youtube-link {
    height: 42px;
    width: 42px;
  }

  .links {
    margin-right: 10px;
  }

  .links-title {
    font-size: 15px;
  }

  .opensource-link {
    height: 40px;
  }

  .footer {

  }
</style>
