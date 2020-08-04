<template>
  <v-card id="feedback-form">
    <p style="text-align: right">
      <v-btn
        @click="$emit('close-form')"
        icon
        color="grey"
        class="mr-2 mt-2"
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </p>

    <v-card-title class="mt-n6" style="text-align: center; word-break: keep-all">
          Хотите предложить тему или нашли баг? Пишите!
    </v-card-title>

    <v-card-text>
      <v-form class="form-inputs">
        <!--another bad solution, need to refactor this-->
        <template v-if="$nuxt.$colorMode.preference === 'light'">
          <v-text-field
            type="email"
            class="rounded-lg mt-5 email-input"
            placeholder="email"
            outlined
            dense
          >
          </v-text-field>
          <v-textarea
            type="text"
            placeholder="сообщение"
            class="rounded-lg mt-n1"
            outlined
            auto-grow
          >
          </v-textarea>
        </template>
        <template v-else>
          <v-text-field
            type="email"
            class="rounded-lg mt-5 email-input"
            placeholder="email"
            outlined
            dark
            dense
          >
          </v-text-field>
          <v-textarea
            type="text"
            placeholder="сообщение"
            class="rounded-lg mt-n1"
            outlined
            dark
            auto-grow
          >
          </v-textarea>
        </template>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="#33aade"
        depressed
        class="write-button mt-n11"
        @click="$emit('close-form')"
      >
        отправить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        name: "FormDialog"
    }
</script>

<style scoped>
  .write-button {
    font-size: 15px;
    letter-spacing: normal;
    text-transform: none;
    color: white;
    margin: 0 auto 7px auto;
    border-radius: 10px;
  }

  #feedback-form {
    border-radius: 15px !important;
  }
</style>
