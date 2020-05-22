import Vue from 'vue'
import Vuex from 'vuex'
// import { CigaretteState } from '~/store/cigarettemodule'
import { CigaretteState } from '~/models/CigaretteModel'
Vue.use(Vuex)
export interface State {
  state: CigaretteState
}
export const store = new Vuex.Store<State>({})
