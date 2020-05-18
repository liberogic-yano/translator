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
          title: 'Text Form',
          icon: 'mdi-file-code-outline',
          url: '/form/text'
        },
        {
          title: 'File Form',
          icon: 'mdi-file-cog-outline',
          url: '/form/file'
        }
      ]
    }
  },
  created() {
    this.$vuetify.theme.dark = true
  }
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #293fa9;
  color: #184b80;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--blue:hover {
  color: #fff;
  background-color: #293fa9;
}
</style>
