<template lang="pug">
  v-content
    v-container(fluid)
      FileForm
</template>

<script lang="ts">
import Vue from 'vue'
import FileForm from '~/components/form/FileForm.vue'
export default Vue.extend({
  components: {
    FileForm
  }
})
</script>
