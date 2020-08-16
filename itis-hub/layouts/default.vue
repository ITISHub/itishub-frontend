<template>
  <v-app id="application">
      <HeaderBar />
      <Nuxt class="container"/>
      <div class="footer-container">
        <FooterBar />
      </div>
  </v-app>
</template>

<script>
  import HeaderBar from "../components/HeaderBar";
  import FooterBar from "../components/FooterBar";
  export default {
    components: {FooterBar, HeaderBar}
  }
</script>

<style>

  .container {
    max-width: 700px;
  }

  .footer-container{
    min-height: 190px;
    margin-top: 80px;
  }

  @media screen and (max-width: 332px){
    .footer-container{
      margin-top: 110px;
    }
  }
</style>
