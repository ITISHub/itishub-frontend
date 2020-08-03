<template>
  <div class="container">
    <h3 class="logo-text">ITIS-hub</h3>
    <div class="current-section"></div>
    <v-btn
      @click="changeTheme"
      class="theme-changer"
      icon
    >
      <v-img v-if="$nuxt.$colorMode.preference === 'light'">&#127774</v-img>
      <v-img v-else>&#x1F31B</v-img>
    </v-btn>
    <!--don't know why, but v-switch doesn't work here (v-model changes)-->
    <!--<v-switch class="theme-changer" v-model="switch1"></v-switch>-->
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data () {
    return {
      switch1: true,
    }
  },
  // need to move all logic to the vuex (do with using mutations and actions)
  methods: {
    changeTheme() {
      switch ($nuxt.$colorMode.preference) {
        case "light": $nuxt.$colorMode.preference = 'dark'; break;
        case "dark": $nuxt.$colorMode.preference = 'light'; break;
        default: $nuxt.$colorMode.preference = 'light'; break;
      }
    },
  }
}
</script>

<style scoped>
  .container {
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo-text {
    align-self: flex-end;
    margin-bottom: 0.1em;
  }

  .current-section {
    align-self: flex-end;
  }

  .theme-changer {
    align-self: center;
    font-size: 20px;
  }
</style>
