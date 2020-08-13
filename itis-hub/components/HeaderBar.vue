<template>
  <div class="container">
    <h3 class="logo-text">ITIS-hub</h3>
    <div class="button-container mt-4">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#33aade"
            dark
            depressed
            v-bind="attrs"
            v-on="on"
            class="write-button nav-button"
            height="30"
            width="55"
          >
            < nav >
          </v-btn>
        </template>
        <v-list>
          <nuxt-link v-for="page in pages" :to="page.link" no-prefetch>
            <v-list-item
              color="#1a1a1a"
            >
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-menu>

      <v-btn
        @click="changeTheme"
        class="theme-changer"
        icon
      >
        <v-img v-if="$nuxt.$colorMode.preference === 'light'">&#127774</v-img>
        <v-img v-else>&#x1F31B</v-img>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data () {
    return {
      pages: [
          { name: 'главная', link: '/'},
          { name: 'предметы', link: '/disciplines'},
          { name: 'о нас', link: '/about'},
        ]
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
    padding: 10px 20px 0 20px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo-text {
    align-self: flex-end;
    margin-bottom: 0.1em;
  }

  .theme-changer {
    align-self: center;
    font-size: 20px;
  }

  .write-button {
    font-size: 15px;
    letter-spacing: normal;
    text-transform: none;
    color: white;
  }

  .nav-button {
    align-self: center;
  }

  .button-container {
    justify-content: flex-end;
    align-self: center;
  }
</style>
