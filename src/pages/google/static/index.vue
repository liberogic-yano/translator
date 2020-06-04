<template lang="pug">
  v-row
    v-col( cols="10" )
      h2 Translator API Sample
      v-row
        v-col( cols="3" )
          v-overflow-btn( label="Language" v-model="select" :items="items" item-value="index")
      v-row
        v-col( cols="10" )
          v-textarea#example( name="text" hint="Source" clearable )
      v-row
        v-col( cols="10" )
          div#result( v-show="isCompleted" )
          v-btn(class="ma-2" color="indigo" outlined v-on:click="doAction" :loading="loading" :disabled="loading") Translate
      v-row
        v-col( cols="10" )
          a( href="https://news.yahoo.co.jp/articles/7e218eab7c49835031a1b059ae2f34bd7cf5b29f" target="_blank" ) via Yahoo
          v-spacer
          a( href="https://www.afp.com/en/news/3955/fury-saints-ace-brees-criticises-nfl-kneeling-protests-doc-1st2kf4" target="_blank" ) via AFP
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {} from '@nuxtjs/axios'
interface Result {
  code: number
  text: string
}
interface TranslateParameters {
  index?: number
  text?: string
  target: string
  source: string
}

@Component({})
export default class TextIndex extends Vue {
  isCompleted: boolean = false
  loading: boolean = false
  select: number = 0
  items: Array<TranslateParameters> = [
    { index: 0, text: 'JP to EN', target: 'en', source: 'ja' },
    { index: 1, text: 'EN to JP', target: 'ja', source: 'en' }
  ]

  async translate(str: string, args: TranslateParameters): Promise<Result> {
    const api: string = process.env.TRANSLATE_API || ''
    const r: Result = await this.$axios.$get(api, {
      params: {
        text: str,
        target: args.target,
        source: args.source
      }
    })
    return r
  }

  doAction(e: any) {
    this.loading = true
    const exam: HTMLTextAreaElement = document.getElementById(
      'example'
    ) as HTMLTextAreaElement
    const rs: HTMLDivElement = document.getElementById(
      'result'
    ) as HTMLDivElement
    rs.innerText = ''
    const txt: string = exam.value
    const p: TranslateParameters = this.items[this.select]
    this.translate(txt, p).then((r) => {
      rs.innerText = r.text
      this.isCompleted = true
      this.loading = false
    })
  }
}
</script>
