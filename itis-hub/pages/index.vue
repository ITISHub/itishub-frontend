<template>
  <div class="content-container">
    <HeaderBar />
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderBar from "~/components/HeaderBar.vue";

export default Vue.extend({
  components: {HeaderBar},
  data() {
    return {
    }
  },
})
</script>

<style>
</style>
