<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          name="text"
          label="Enter text"
          rows="5"
          cols="50"
          v-model="text"
          v-on:keyup="doAction()"
        ></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea
          name="result"
          label="Translation"
          rows="5"
          cols="50"
          class="display-1"
          :value="result"
        ></v-textarea>
      </v-col>
      <!-- <v-col>
        <button type="button" @click="doAction()" class="button--blue">
          Submit
        </button>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default Vue.extend({
  name: 'Form',
  data() {
    return {
      text: '',
      result: ''
    }
  },
  methods: {
    async doAction() {
      if (!this.text) {
        return
      }
      this.result = 'Translation...'
      const api: string = process.env.API_PATH || ''
      await this.$axios
        .$get(api, {
          params: {
            text: this.text,
            source: 'ja',
            target: 'en'
          }
        })
        .then((value) => {
          this.result = value.text
        })
    }
  }
})
</script>
