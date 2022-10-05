<template>
  <div class="container header">
    <h3 class="header__logo logo">
      <nuxt-link to="/" class="logo__link"> ITIS-hub </nuxt-link>
    </h3>
    <div class="header__btn-container btn-container mt-4">
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            color="#33aade"
            dark
            depressed
            v-bind="attrs"
            class="btn-container__write-button btn-container__nav-button nav-button"
            height="30"
            width="55"
            v-on="on"
          >
            &lt; nav &gt;
          </v-btn>
        </template>
        <v-list>
          <nuxt-link
            v-for="page in pages"
            :key="page.name"
            :to="page.link"
            no-prefetch
          >
            <v-list-item color="#1a1a1a" class="nav-button__link">
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-menu>

      <v-btn
        v-if="$nuxt.$colorMode.preference === 'light'"
        class="btn-container__theme-changer"
        icon
        @click="applyDarktheme"
      >
        <v-img> &#127774; </v-img>
      </v-btn>

      <v-btn
        v-if="$nuxt.$colorMode.preference === 'dark'"
        class="btn-container__theme-changer"
        icon
        @click="applySystemTheme"
      >
        <v-img> &#x1F31B; </v-img>
      </v-btn>

      <v-btn
        v-if="$nuxt.$colorMode.preference === 'system'"
        class="btn-container__theme-changer"
        icon
        @click="applyLightTheme"
      >
        <v-img> &#128421;&#65039; </v-img>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      pages: [
        { name: "главная", link: "/" },
        { name: "предметы", link: "/disciplines" },
        { name: "сообщество", link: "/community" },
        { name: "о нас", link: "/about" },
      ],
    };
  },
  methods: {
    applyLightTheme() {
      $nuxt.$colorMode.preference = "light";
    },
    applyDarktheme() {
      $nuxt.$colorMode.preference = "dark";
    },
    applySystemTheme() {
      $nuxt.$colorMode.preference = "system";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px 20px 0 20px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header__logo {
  align-self: flex-end;
  margin-bottom: 0.1em;
}

.logo__link {
  color: var(--color);
}

.btn-container__theme-changer {
  align-self: center;
  font-size: 20px;
}

.btn-container__write-button {
  font-size: 15px;
  letter-spacing: normal;
  text-transform: none;
  color: white;
}

.nav-button__link {
  transition: all 0.2s;
}

.nav-button__link:hover {
  background-color: #d9dce6;
}

.btn-container__nav-button {
  align-self: center;
}

.header__btn-container {
  justify-content: flex-end;
  align-self: center;
}
</style>
