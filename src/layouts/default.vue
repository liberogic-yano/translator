<template lang="pug">
  v-app(dark)
    v-navigation-drawer( v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app )
      v-list( dense )
        template( v-for="(item, i) in items" )
          v-list-group( v-if="item.children" :key="i" )
            template( v-slot:activator )
              v-list-item-action
                v-icon {{ item.icon }}
              v-list-item-content
                v-list-item-title {{ item.title }}
            v-list-item( v-for="(child, j) in item.children" :key="j" link :to="child.to" )
              v-list-item-action( v-if="child.icon" )
                v-icon {{ child.icon }}
              v-list-item-title {{ child.title }}
          v-list-item( v-else :key="i" :to="item.to" router exact )
            v-list-item-action
              v-icon {{ item.icon }}
            v-list-item-title {{ item.title }}
    v-app-bar( :clipped-left="clipped" fixed app )
      v-app-bar-nav-icon( @click.stop="drawer = !drawer" )
      v-btn( icon @click.stop="miniVariant = !miniVariant" )
        v-icon mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
      v-btn( icon @click.stop="clipped = !clipped" )
        v-icon mdi-application
      v-btn( icon @click.stop="fixed = !fixed" )
        v-icon mdi-minus
      v-toolbar-title(v-text="title")
      v-spacer
    v-content
      v-container
        nuxt
    v-footer( :fixed="fixed" app )
      span &copy; {{ new Date().getFullYear() }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

interface NaviMenuList {
  icon?: string
  title?: string
  to?: string
  children?: Array<NaviMenuListItem>
}
interface NaviMenuListItem {
  icon: string
  title: string
  to: string
}

@Component({})
export default class extends Vue {
  clipped: boolean = false
  drawer: boolean = false
  fixed: boolean = false
  miniVariant: boolean = false
  right: boolean = true
  rightDrawer: boolean = false
  title: string = 'Vuetify.js'
  items: Array<NaviMenuList> = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    },
    {
      icon: 'mdi-translate',
      title: 'Google',
      children: [
        {
          icon: 'mdi-file-code-outline',
          title: 'Text',
          to: '/google/text'
        },
        {
          icon: 'mdi-file-code-outline',
          title: 'Static',
          to: '/google/static'
        }
      ]
    }
  ]
}
</script>
