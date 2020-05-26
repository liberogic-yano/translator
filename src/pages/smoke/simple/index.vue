<template lang="pug">
  v-content
    v-container( fluid )
      v-form
        h3 禁煙開始日
        v-row
          v-col( cols="2" )
            v-text-field( v-model="time.year" type="number" class="pa-2" placeholder="2020" min="1900" max="2100" append-icon="年" )
          v-col( cols="1" )
            v-text-field( v-model="time.month" type="number" min="1" max="12" class="pa-2" placeholder="1" append-icon="月" )
          v-col( cols="1" )
            v-text-field( v-model="time.day" type="number" min="1" max="31" class="pa-2" placeholder="1" append-icon="日" )
        v-row
          v-col( cols="1" )
            v-text-field( v-model="time.hour" type="number" min="0" max="23" class="pa-2" placeholder="1" append-icon="時" )
          v-col( cols="1" )
            v-text-field( v-model="time.minute" type="number" min="0" max="59" class="pa-2" placeholder="1" append-icon="分" )
          v-col( cols="1" )
            v-text-field( v-model="time.second" type="number" min="0" max="59" class="pa-2" placeholder="1" append-icon="秒" )
        v-row
          v-col( cols="3" )
            v-btn( color="primary" ) 現在の時間に合わせる
        h3 禁煙状況
        v-row
          v-col( cols="2" )
            span タバコの価格
            v-text-field( v-model="model.price" type="number" class="pa-2" placeholder="400" append-icon="円")
        v-row
          v-col( cols="2" )
            span 1箱あたりの本数
            v-text-field( v-model="model.count" type="number" class="pa-2" placeholder="20" append-icon="本")
        v-row
          v-col( cols="2" )
            span 1日の喫煙本数
            v-text-field( v-model="model.smoke" type="number" class="pa-2" placeholder="10" append-icon="本")
        v-divider
        v-row
          v-col( cols="5")
            v-btn( color="primary" class="mr-5" @click="onBeginMeasure" ) 計測開始
            v-btn( color="red" ) リセット
              
          
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CigarettePackage } from '~/store/cigarettemodule'
import { CigaretteState, CigaretteModel, TimeState, TimeModel } from '~/models'

@Component
export default class SmokeSimpleIndex extends Vue {
  time: TimeState = new TimeModel()
  model: CigaretteState = new CigaretteModel()

  get cigaretteItem(): CigaretteModel {
    return CigarettePackage.ci
  }

  created() {
    CigarettePackage.load()
    const c: string = this.cigaretteItem.created_at
    const d: Date = new Date(c)
    this.time.setISOFormat(d)
  }
  onBeginMeasure() {
    this.model.created_at = this.time.getISOFormat()
    CigarettePackage.save(this.model)
  }
  onResetMeasure() {}
}
</script>
