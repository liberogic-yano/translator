// @see - https://qiita.com/tsrnk/items/fd95c3d8013d0795a260
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
  getModule
} from 'vuex-module-decorators'
import { CigaretteState, CigaretteModel } from '~/models/CigaretteModel'
import { store } from '~/store'

@Module({
  dynamic: true,
  name: 'cigarette',
  namespaced: true,
  stateFactory: true,
  store: store
})
class CigarettePackageModule extends VuexModule {
  @Mutation
  public SAVE(model: CigaretteState) {
    localStorage.setItem('cigarette', JSON.stringify(model))
  }

  @Action
  public save(args: any) {
    this.SAVE(args)
  }

  // @MutationAction({ mutate: ['_model'] })
  // async Reset() {
  //   return {
  //     _model: new CigaretteModel()
  //   }
  // }
}

export const CigarettePackage = getModule(CigarettePackageModule)
