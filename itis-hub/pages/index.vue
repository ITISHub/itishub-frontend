<template>
  <div class="container">
    <button @click="showMesage(greeting)" class="greetingButton">
      Say some greetings
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      greeting: "Let's begin!"
    }
  },
  methods: {
    showMesage(mesage: string): void {
      alert(mesage)
    }
  }
})
</script>

<style>
  .container {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  .greetingButton {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background-color: green;
    color: white;
    border: 2px solid blueviolet;
  }

  .greetingButton:focus {
    outline: none;
  }
</style>
