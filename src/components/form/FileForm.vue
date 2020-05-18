<template lang="pug">
  v-row(align="center" justify="center")
    v-col
      v-form(ref="form")
        v-file-input(accept="text/plain" placeholder="Pick an text file" prepend-icon="mdi-paperclip" label="TextFile" v-on:change="change" show-size)
        v-btn(class="ma-2" color="indigo" outlined v-on:click="translate") Translate
        v-btn(class="ma-2" color="red" outlined v-on:click="reset()") Reset
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FileForm',
  data() {
    return {
      uploadStatus: false
    }
  },
  methods: {
    change(e: any): void {
      console.log(e)
    },
    translate(e: any): void {
      console.log(this.$refs.form)
    },
    reset(): void {}
  }
})
</script>
