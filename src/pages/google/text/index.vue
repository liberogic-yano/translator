<template lang="pug">
  v-row
    v-col( cols="10" )
      h2 Translator API Sample
      div#example.translator
        p 太陽はほぼ完全な球体であり、その扁平率は0.01%以下である。太陽には、地球型惑星や衛星などと異なり、はっきりした表面が存在しない[19]。
        p 太陽は、中心核（太陽核）・放射層・対流層・光球・彩層・遷移層・コロナからなる[20][21]。可視光にて地球周辺から太陽を観察した場合の視野角と概ね一致するため、このうち光球を便宜上太陽の表面としている[9]。また、それより内側を光学的に観測する手段がない[22]。太陽半径を太陽中心から光球までの距離として定義する。光球には周囲よりも温度の低い太陽黒点や、まわりの明るい部分であるプラージュと呼ばれる領域が存在することが多い[9]。光球より上層の、光の透過性の高い部分を太陽大気と呼ぶ。プラズマ化した太陽大気の上層部は太陽重力による束縛を受けにくい。このため惑星間空間に漏れ出し海王星軌道まで及んでいる。これを太陽風と呼び、オーロラの原因ともなる[23]。
        p 太陽は光球より内側が電磁波に対して不透明であるため、内部を電磁波によって直接見ることができない。太陽内部についての知識は、太陽の大きさ、質量、総輻射量、表面組成・表面振動（5分振動）等の観測データを基にした理論解析（日震学）によって得るしか方法がないのが現実である。理論解析においては、太陽内部の不透明度と熱核融合反応を量子力学により推定し、観測データによる制限を境界条件とした数値解析を行う。よって、太陽中心部の温度、密度等はこのような解析によって得られた数値でありなおかつ推定値でもある。
      
      div#result(v-show="isCompleted")
      v-btn(class="ma-2" color="indigo" outlined :loading="loading" :disabled="loading" v-on:click="doAction") Translate
      p
        a(href="https://ja.wikipedia.org/wiki/%E5%A4%AA%E9%99%BD#%E6%A7%8B%E9%80%A0" target="_blank") 出典 wikipedia 太陽+構造
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {} from '@nuxtjs/axios'
interface Result {
  code: number
  text: string
}
interface TranslateParameters {
  text: string
  target: string
  source: string
}

@Component({})
export default class StaticIndex extends Vue {
  isCompleted: boolean = false
  loading: boolean = false

  async translate(str: string): Promise<Result> {
    const api: string = process.env.TRANSLATE_API || ''
    const r: Result = await this.$axios.$get(api, {
      params: {
        text: str,
        target: 'en',
        source: 'ja'
      }
    })
    return r
  }

  doAction(e: any) {
    this.loading = true
    const exam: HTMLDivElement = document.getElementById(
      'example'
    ) as HTMLDivElement
    const rs: HTMLDivElement = document.getElementById(
      'result'
    ) as HTMLDivElement
    const txt: string = exam.innerText
    this.translate(txt).then((r) => {
      rs.innerText = ''
      rs.innerText = r.text
      this.isCompleted = true
      this.loading = false
    })
  }
}
</script>
