<template>
  <div class="developer-content">

    <div class="test-developer mr-2 mt-n1">
      <div class="child mt-n3 ml-n3" :style="{'background-image': 'url(' + currentBaseUrl +  image + ')' }"></div>
    </div>

    <div class="developer-info">
      <h4 class="developer-name"> {{ name }} </h4>
      <p> {{ duties }} </p>
      <div class="links mt-n3">
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
  .developer-content {
    max-width: 400px;
    display: flex;
    gap: 30px;
    justify-content: center;
    text-align: left;
  }

  .links button {
    margin-right: -4px;
  }

  .developer-name {
    white-space: nowrap;
  }

  .test-developer {
    width: 100px;
    height: 100px;
    border: 3px white solid;
    border-radius: 15px;
    transition: all 0.3s;
    transform: rotate(-20deg);
    overflow: hidden;
  }

  .test-developer:hover {
    transform: rotate(0deg) translate(20px, 10px);
  }

  .child {
    transition: all 0.3s;
    transform: rotate(20deg);
    background-size: cover;
    width: 125%;
    height: 125%;
  }

  .child:hover {
    transform: rotate(0deg);
  }

  @media screen and (max-width: 568px){
    .developer-name {
      font-size: 14px;
    }

    .test-developer {
      width: 80px;
      height: 80px;
    }

    .child:hover {
      transform: rotate(20deg);
    }
    .test-developer:hover {
      transform: rotate(-20deg);
    }
  }

</style>
