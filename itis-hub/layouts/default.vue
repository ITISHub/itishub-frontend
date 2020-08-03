<template>
  <div class="content">
      <HeaderBar />
      <Nuxt class="container"/>
      <div class="spacer"></div>
      <FooterBar />
  </div>
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

  .spacer {
    min-height: calc(31vh - 200px);
  }
</style>
