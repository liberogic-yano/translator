<template lang="pug">
  v-app(id="inspire")
    v-navigation-drawer(v-model="drawer" app clipped)
      v-list( dense )
        template( v-for="item in items" )
          v-list-group( v-if="item.children" :key="item.title" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="" )
            template( v-slot:activator )
              v-list-item-content
                v-list-item-title {{ item.title }}
            v-list-item( v-for="(child, i) in item.children" :key="i" link :href="child.url" )
              v-list-item-action( v-if="child.icon" )
                v-icon {{ child.icon }}
              v-list-item-content
                v-list-item-title {{ child.title }}
          v-list-item( v-else :key="item.title" link :href="item.url" )
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
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          model: false,
          children: [
            {
              title: 'Pro',
              icon: 'mdi-file-code-outline',
              url: '/smoke/'
            },
            {
              title: 'Simple',
              icon: 'mdi-file-code-outline',
              url: '/smoke/simple/'
            }
          ]
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
