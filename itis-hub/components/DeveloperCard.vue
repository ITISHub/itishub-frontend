<template>
  <div class="developer-content">
    <img :src="require(`~/assets/card-images/developers/${image}`)" alt="developer" class="developer-image">
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
}
</script>

<style scoped>
  .developer-image {
    max-height: 100px;
    max-width: 100px;
    border-radius: 15px;
  }

  .developer-content {
    max-width: 300px;
    display: flex;
    gap: 2rem;
    justify-content: center;
    text-align: left;
  }

  .links button {
    margin-right: -4px;
  }

  .developer-name {
    white-space: nowrap;
  }
</style>
