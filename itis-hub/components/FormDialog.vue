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
      <v-form class="form-inputs" v-model="isValid" ref="form">
        <!--another bad solution, need to refactor this-->
        <template v-if="$nuxt.$colorMode.preference === 'light'">
          <v-text-field
            type="email"
            class="rounded-lg mt-5 email-input"
            v-model="email"
            placeholder="email"
            outlined
            dense
            :rules="emailRules"
          >
          </v-text-field>
          <v-textarea
            type="text"
            placeholder="сообщение"
            class="rounded-lg mt-n1"
            v-model="text"
            outlined
            auto-grow
            :rules="requiredRules"
          >
          </v-textarea>
        </template>
        <template v-else>
          <v-text-field
            type="email"
            class="rounded-lg mt-5 email-input"
            v-model="email"
            placeholder="email"
            outlined
            dark
            dense
            :rules="emailRules"
          >
          </v-text-field>
          <v-textarea
            type="text"
            placeholder="сообщение"
            class="rounded-lg mt-n1"
            v-model="text"
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
        class="write-button mt-n7"
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
                email:'',
                text:'',
                isValid: false,
                emailRules: [
                  v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'неверный email',
                  (v) => !!v
                ],
                requiredRules: [(v) => !!v || 'не молчите :)']
            }
        },
        methods: {
            validateForm () {
              if (this.isValid) {
                this.sendReview();
                this.$emit('close-form')
              } else {
                this.$refs.form.validate();
              }
            },
            async sendReview(){
                let data = {
                    email:this.email,
                    text:this.text
                };
                fetch('http://127.0.0.1:1337/api/v1/review/',{
                        method: "POST",
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify(data)
                    }
                ).then(response => {response.json()})
            }
        }
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
