<template lang="pug">
  v-content
    v-container(fluid)
      TextForm
</template>

<script lang="ts">
import Vue from 'vue'
import TextForm from '~/components/form/TextForm.vue'
export default Vue.extend({
  components: {
    TextForm
  }
})
</script>
