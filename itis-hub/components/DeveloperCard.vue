<template>
  <div class="developer-card">

    <div class="developer-card__image-container image mr-2 mt-n1">
      <div class="developer-card_image mt-n3 ml-n3" :style="{'background-image': 'url(' + currentBaseUrl +  image + ')' }"></div>
    </div>

    <div class="developer-card__info">
      <h4 class="info__name"> {{ name }} </h4>
      <p> {{ duties }} </p>
      <div class="info__links mt-n3">
        <v-btn icon target="_blank" :href="github">
          <img src="~assets/icons/github.svg" alt="github" height="32">
        </v-btn>
        <v-btn icon target="_blank" :href="telegram">
          <img src="~assets/icons/telegram.svg" alt="telegram" height="30">
        </v-btn>
        <v-btn icon target="_blank" :href="vk">
          <img src="~assets/icons/vk.svg" alt="vk" height="30">
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "DeveloperCard",
    props: {
      image: String,
      name: String,
      duties: String,
      vk: String,
      github: String,
      telegram: String,
    },
    computed: {
      currentBaseUrl() {
        // removed last '/' for media files
        return process.env.baseUrl.slice(0, process.env.baseUrl.length - 1);
      }
    }
}
</script>

<style scoped>
  .developer-card {
    max-width: 400px;
    display: flex;
    gap: 30px;
    justify-content: center;
    text-align: left;
  }

  .developer-card__image-container {
    width: 100px;
    height: 100px;
    border: 3px white solid;
    border-radius: 20px;
    transition: all 0.3s;
    transform: rotate(-20deg);
    overflow: hidden;
  }

  .developer-card__image-container:hover {
    transform: rotate(0deg) translate(20px, 10px);
  }

  .developer-card_image {
    transition: all 0.3s;
    transform: rotate(20deg);
    background-size: cover;
    width: 125%;
    height: 125%;
  }

  .developer-card_image:hover {
    transform: rotate(0deg);
  }

  .info__links button {
    margin-right: -4px;
  }

  .info__name {
    white-space: nowrap;
  }

  @media screen and (max-width: 568px){
    .info__name {
      font-size: 14px;
    }

    .developer-card__image-container {
      width: 80px;
      height: 80px;
    }

    .developer-card_image:hover {
      transform: rotate(20deg);
    }

    .developer-card__image-container:hover {
      transform: rotate(-20deg);
    }
  }

</style>
