<template lang="pug">
  v-content
    v-container( fluid )
      v-form
        h3 禁煙開始日
        v-row
          v-col( cols="3" )
            v-text-field(placeholder="20200101")
          v-col( cols="3" )
            v-text-field(placeholder="01:01:01")
        v-row
          v-col( cols="3" )
            v-btn( color="primary" ) 現在の時間に合わせる
        h3 禁煙状況
        v-row
          v-col( cols="3" )
            span タバコの価格
            v-text-field( v-model="price" :value="price" placeholder="400" append-icon="円")
        v-row
          v-col( cols="3" )
            span 1箱あたりの本数
            v-text-field( v-model="count" :value="count" placeholder="20" append-icon="本")
        v-row
          v-col( cols="3" )
            span 1日の喫煙本数
            v-text-field( v-model="num" :value="num" placeholder="10" append-icon="本")
        v-divider
        v-row
          v-col( cols="5")
            v-btn( color="primary" class="mr-5" @click="onBeginMeasure" ) 計測開始
            v-btn( color="red" ) リセット
              
          
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { CigarettePackage } from '~/store/cigarettemodule'

@Component
export default class SmokeSimpleIndex extends Vue {
  price: number = 400
  count: number = 20
  num: number = 20
  onBeginMeasure() {
    CigarettePackage.SetPrice(this.price)
    CigarettePackage.SetCount(this.count)
    CigarettePackage.SetSmoke(this.num)
  }
  onResetMeasure() {
    CigarettePackage.Reset().then((r) => console.log)
  }
}
</script>
