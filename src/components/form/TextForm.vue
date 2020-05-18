<template lang="pug">
  v-row(align="center" justify="center")
    v-col(cols="12" md="6")
      p JP
      v-textarea(name="text" label="Enter Text" rows="5" cols="50" v-model="text" v-on:keyup="doAction()")
    v-col(cols="12", md="6")
      p EN
      v-textarea(name="result" label="Translation" rows="5" cols="50" :value="result" disabled)
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default Vue.extend({
  name: 'TextForm',
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
