<template>
  <v-card id="feedback-form">
    <p style="text-align: right">
      <v-btn icon color="grey" class="mr-2 mt-2" @click="$emit('close-form')">
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </p>

    <v-card-title
      class="mt-n6"
      style="text-align: center; word-break: keep-all"
    >
      Хотите предложить тему или нашли баг? Пишите!
    </v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="isValid">
        <!--another bad solution, need to refactor this-->
        <template v-if="$nuxt.$colorMode.preference === 'light'">
          <v-text-field
            v-model="email"
            type="email"
            class="rounded-lg mt-5"
            placeholder="email"
            outlined
            dense
            :rules="emailRules"
          >
          </v-text-field>
          <v-textarea
            v-model="text"
            type="text"
            placeholder="сообщение"
            class="rounded-lg mt-n1"
            outlined
            auto-grow
            :rules="requiredRules"
          >
          </v-textarea>
        </template>
        <template v-else>
          <v-text-field
            v-model="email"
            type="email"
            class="rounded-lg mt-5"
            placeholder="email"
            outlined
            dark
            dense
            :rules="emailRules"
          >
          </v-text-field>
          <v-textarea
            v-model="text"
            type="text"
            placeholder="сообщение"
            class="rounded-lg mt-n1"
            outlined
            dark
            auto-grow
            :rules="requiredRules"
          >
          </v-textarea>
        </template>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="#33aade"
        depressed
        class="feedback-form__write-button mt-n7"
        @click="validateForm"
      >
        отправить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FormDialog",
  data() {
    return {
      email: "",
      text: "",
      isValid: false,
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(v) ||
          "неверный email",
        (v) => !!v,
      ],
      requiredRules: [(v) => !!v || "не молчите :)"],
    };
  },
  methods: {
    validateForm() {
      if (this.isValid) {
        this.sendReview();
        this.$emit("close-form");
      } else {
        this.$refs.form.validate();
      }
    },
    // move to vuex
    async sendReview() {
      let data = {
        email: this.email,
        text: this.text,
      };
      fetch(process.env.baseUrl + process.env.reviewAccess, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      //.then(response => {response.json()}).catch(alert)
    },
  },
};
</script>

<style scoped>
.feedback-form__write-button {
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
