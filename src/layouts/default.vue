<template lang="pug">
  v-app(id="inspire")
    v-navigation-drawer(v-model="drawer" app clipped)
      v-list(dense v-for="item in items" :key="item.title")
        v-list-item(link :href="item.url")
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
    
    v-app-bar(app clipped-left)
      v-app-bar-nav-icon(v-on:click.stop="drawer = !drawer")
      v-toolbar-title Application

    nuxt
    v-footer(app)
      span &copy; 2020
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    source: String
  },
  data() {
    return {
      drawer: null,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          url: '/'
        },
        {
          title: 'Static',
          icon: 'mdi-file-code-outline',
          url: '/static/'
        },
        {
          title: 'Smoke',
          icon: 'mdi-file-code-outline',
          url: '/smoke/'
        },
        {
          title: 'Text Form',
          icon: 'mdi-file-code-outline',
          url: '/form/text/'
        },
        {
          title: 'File Form',
          icon: 'mdi-file-cog-outline',
          url: '/form/file/'
        }
      ]
    }
  },
  created() {
    this.$vuetify.theme.dark = true
  }
})
</script>
