<template>
  <v-app id="application">
    <div class="content">
      <HeaderBar />
      <Nuxt class="container"/>
<!--      <div class="spacer"></div>-->
      <FooterBar />
    </div>
  </v-app>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import Footer from "../components/FooterBar";
  export default {
    components: {Footer, HeaderBar}
  }
</script>

<style>
  .container {
    max-width: 800px;
  }

  /*optimised for iPad's and for other tablets
    костыль тот еще 0_о */
  /*.spacer {*/
  /*  min-height: calc(31vh - 200px);*/
  /*}*/
</style>
