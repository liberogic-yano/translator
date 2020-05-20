<template lang="pug">
  v-content
    v-container(fluid)
      v-row( align="center" justify="center" )
        v-col( cols="10" )
          h2 STOP SMOKING
          v-menu(ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y max-with="290px" min-width="290px")
            template(v-slot:activator="{on}")
              v-text-field(v-model="computedDateFormatted" label="Date" hint="YYYY/MM/DD format" persistent-hint prepend-icon="mdi-calendar-month-outline" v-on="on" readonly)
            v-date-picker(v-model="date" @input="menu = false")
          v-spacer
          v-dialog( ref="dialog" v-model="modal" :return-value.sync="time" width="290px" presistent )
            template( v-slot:activator="{on}" )
              v-text-field( v-model="time" label="Picker in dialog" prepend-icon="mdi-clock-time-four-outline" v-on="on" readonly )
            v-time-picker( v-if="modal" v-model="time" format="24hr" scrollable full-width )
              v-spacer
              v-btn( text color="primary" @click="modal = false" ) Cancel
              v-btn( tett color="primary" @click="$refs.dialog.save(time)" ) OK
          v-spacer
      v-row( align="center" justify="center")
        v-col( cols="10" )
          p
            span You begun stop smoking at 
              strong {{ date }} {{ time }}.
      v-row( align="center" justify="center" )
        v-col( cols="3")
          span タバコの価格
          v-text-field( type="number" label="Price" prepend-icon="mdi-cash-usd-outline" placeholder="450" append-icon="円" )
        v-col( cols="3")
          span 1箱あたりの本数
          v-text-field( type="number" label="unit" prepend-icon="mdi-cash-usd-outline" default="20" placeholder="20" append-icon="本" )
        v-col( cols="3")
          span 1日で吸う本数
          v-text-field( type="number" label="unit" prepend-icon="mdi-cash-usd-outline" placeholder="20" append-icon="本" )
      v-row( align="center" justify="center" )
        v-col( cols="10" )
          v-btn( color="red" class="mr-5" ) Reset
          v-btn( color="primary" ) Start
            
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SmokeIndex',
  data() {
    return {
      date: new Date().toISOString().substring(0, 10),
      time: '',
      modal: false,
      menu: false
    }
  },
  computed: {
    computedDateFormatted(): string {
      return this.formatDate(this.date)
    }
  },
  methods: {
    formatDate(date: string): string {
      if (!date) {
        return ''
      }
      const [year, month, day] = date.split('-')
      return `${year}/${month}/${day}`
    },
    parseDate(date: string) {
      if (!date) {
        return ''
      }
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
})
</script>
