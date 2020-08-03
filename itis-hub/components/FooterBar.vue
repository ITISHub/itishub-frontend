<template>
  <div class="footer">
      <v-row class="footer-container">
        <v-col class="feedback">
          <h4>На связи</h4>
          <p>Нашли баг  или хотите
            с нами связаться? Пишите!
          </p>
          <v-btn
            color="#33aade"
            depressed
            class="write-button"
          >
            написать
          </v-btn>
        </v-col>
        <v-col class="social-media">
          <p class="links-title">мы в соц. сетях</p>
          <div class="mr-2 mt-n3">
            <v-btn icon>
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
            <v-btn icon>
              <img src="~assets/icons/github.svg" alt="github" height="36">
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

  .links-title {
    font-size: 15px;
  }

  .write-button {
    font-size: 15px;
    letter-spacing: normal;
    text-transform: none;
    color: white;
  }
</style>
