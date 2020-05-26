import Vue from 'vue'
import Vuex from 'vuex'
import { CigaretteState } from '~/models'
Vue.use(Vuex)
export interface State {
  state: CigaretteState
}
export const store = new Vuex.Store<State>({})
